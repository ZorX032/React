import {Products} from "./IProducts.ts";

export interface ICart {
	id: number;
	products: Products[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
