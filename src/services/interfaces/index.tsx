export interface CarData {
    id: number;
    brand: string;
    name: string;
    year: string;
    km: string;
    price: number;
    specifications: string;
    image: string;
    color: string;
    fuel: string;
    fuelUrban: string;
    fuelRoad: string;
    dataSheet: string;
}

export interface CarDataPagination {
    data: CarData[],
    meta: {
        total: number,
        lastPage: number,
        currentPage: number,
        perPage: number,
    }
}