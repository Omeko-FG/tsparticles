import type { ICharacterShape } from "./ICharacterShape";
import type { IImageShape } from "./IImageShape";
import type { IPolygonShape } from "./IPolygonShape";
import type { IStroke } from "../IStroke";
import type { ShapeData } from "../../../../Types/ShapeData";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";

/**
 * [[include:Options/Particles/Shape.md]]
 */
export interface IShape {
    /**
     * @deprecated this property is now integrated in custom shape management
     */
    character: SingleOrMultiple<ICharacterShape>;

    /**
     * Set this property to false for creating an open shape
     */
    close: boolean;

    /**
     * @deprecated this property has been renamed to options
     */
    custom: ShapeData;

    /**
     * Set this property to false for creating an empty shape
     */
    fill: boolean;

    /**
     * @deprecated this property was integrated in custom shape management
     */
    image: SingleOrMultiple<IImageShape>;

    /**
     * @deprecated this property was integrated in custom shape management
     */
    images: SingleOrMultiple<IImageShape>;

    options: ShapeData;

    /**
     * @deprecated this property is now integrated in custom shape management
     */
    polygon: SingleOrMultiple<IPolygonShape>;

    /**
     * @deprecated this property was moved to particles section
     */
    stroke: SingleOrMultiple<IStroke>;

    type: SingleOrMultiple<string>;
}
