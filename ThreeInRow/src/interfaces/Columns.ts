export interface columnInterface <T>{
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
export interface PropsGeneral<T> {
    data: T[];
    columns: columnInterface<T>[];
}