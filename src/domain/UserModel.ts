import BaseModel from "./BaseModel";
import { v4 as uuid } from "uuid";
import { UserErrors } from "./constants/UserConstants";
import { getNow } from "src/util/helper";

class User extends BaseModel {
  id?: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  country?: string;
  state?: string;
  city?: string;
  dob?: string;
  confirmedEmail?: boolean;
  confirmedPhone?: boolean;
  hasLoggedIn?: boolean;
  createdAt?: string;
  updatedAt?: string;

  fullName = `${this.firstName} ${this.lastName}`;

  constructor(
    id?: string,
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    address1?: string,
    address2?: string,
    country?: string,
    state?: string,
    city?: string,
    dob?: string
  ) {
    super();

    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address1 = address1;
    this.address2 = address2;
    this.country = country;
    this.state = state;
    this.city = city;
    this.dob = dob;
  }

  public maskPassword = () => (this.password = "");
  
  public beforeCreate = (): void => {
    this.validateCreate();
    const now = getNow();
    this.createdAt = now;
    this.updatedAt = now;
    this.confirmedEmail = false;
    this.confirmedPhone = false;
    this.hasLoggedIn = false;
    this.id = uuid();
  }
  private validateCreate = (): void => {
    if (!this.email) throw new Error(UserErrors.EMAIL_IS_REQUIRED);
    if (!this.password) throw new Error(UserErrors.PASSWORD_IS_REQUIRED);
    if (!this.firstName) throw new Error(UserErrors.FIRST_NAME_IS_REQUIRED);
    if (!this.lastName) throw new Error(UserErrors.LAST_NAME_IS_REQUIRED);
  };
}

export default User;
