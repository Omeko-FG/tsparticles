import { downloadSvgImage, loadImage } from "./Utils";
import type { IImage } from "./Utils";
import type { IPreload } from "./Options/Interfaces/IPreload";
import { ImageDrawer } from "./ImageDrawer";
import type { ImageEngine } from "./types";
import { ImagePreloaderPlugin } from "./ImagePreloader";
import { errorPrefix } from "tsparticles-engine";

/**
 * Loads the image shape in the given engine
 * @param engine - the engine where the image shape is going to be added
 */
export async function loadImageShape(engine: ImageEngine): Promise<void> {
    if (!engine.loadImage) {
        engine.loadImage = async (data: IPreload): Promise<void> => {
            if (!data.name && !data.src) {
                throw new Error(`${errorPrefix} no image source provided`);
            }

            if (!engine.images) {
                engine.images = [];
            }

            if (engine.images.find((t: IImage) => t.name === data.name || t.source === data.src)) {
                return;
            }

            try {
                const image: IImage = {
                    name: data.name ?? data.src,
                    source: data.src,
                    type: data.src.substring(data.src.length - 3),
                    error: false,
                    loading: true,
                    replaceColor: data.replaceColor,
                    ratio: data.width && data.height ? data.width / data.height : undefined,
                };

                engine.images.push(image);

                const imageFunc = data.replaceColor ? downloadSvgImage : loadImage;

                await imageFunc(image);
            } catch {
                throw new Error(`${errorPrefix} ${data.name ?? data.src} not found`);
            }
        };
    }

    const preloader = new ImagePreloaderPlugin(engine);

    await engine.addPlugin(preloader);
    await engine.addShape(["image", "images"], new ImageDrawer(engine));
}
