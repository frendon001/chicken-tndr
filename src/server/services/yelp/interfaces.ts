export interface IGetSearchBusinessRequest {
	location: string;
	term: string;
	offset: string;
	openNow: string;
	price: string;
	sortBy: string;
}

export interface IBusinessIdRequest {
	businessId: string;
}
