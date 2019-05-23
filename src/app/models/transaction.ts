export class Transaction {
    name: string;
    from: Contact;
    amount: number;
    to: Contact;
}
export class Contact {
    code: number;
    number: number;
    name: string;
}
