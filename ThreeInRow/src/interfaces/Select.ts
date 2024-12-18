// archivo Select.ts
// export interface selectInterface <T> {
//     name: string;
//     id: keyof T;
// }
// export interface SelectProp<T> {
//     items: selectInterface<T>[];
// }
export interface selectInterface {
    name: string;
    id: number;
}
export interface SelectProp {
    items: selectInterface[];
}