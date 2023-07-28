import faker from '@faker-js/faker';

export const options = [
  ...Array.from(Array(30).keys()).map((data) => ({
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetName(),
      suite: faker.random.number(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      }
    },
    phone: faker.phone.phoneNumber(),
    website: faker.internet.domainName(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs()
    }
  }))
];

export const optionsBase = (count = 30) => [
  ...Array.from(Array(count).keys()).map((data) => ({
    value: faker.random.uuid(),
    label: `${faker.name.firstName()} ${faker.name.lastName()}`
  }))
];

export const optionsSimple = (count = 30) => [
  ...Array.from(Array(count).keys()).map((data) => ({
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`
  }))
];
