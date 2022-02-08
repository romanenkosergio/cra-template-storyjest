interface IUserGeoAddress {
    lat: string;
    lng: string;
}

interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeoAddress;
}

interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}

export default IUser;
