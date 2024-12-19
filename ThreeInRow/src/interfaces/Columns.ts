export interface columnInterface <T> {
    // Aqui controlo el tipo de dato
    render?: (value: T) => React.ReactNode;
    // aqui va el nombre de como llega en realidad de la bd
    dataIndex: keyof T;
    title: string;
    key: string;
}
export interface Sort<T> {
    key: keyof T;
    direction: "asc" | "desc";
  }
export interface GeneralProps<T> {
    data: T[];
    columns: columnInterface<T>[];
}
// export interface multiCheckProp<T> {
//     data: T;
//     param: keyof T;
// }
export interface multiCheckInterface<T> {
    data: T;
    param: keyof T;
}
