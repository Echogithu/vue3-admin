declare namespace Menu {
  interface MenuData {
    title: string;
    icon: string;
    path: string;
    hidden?: boolean;
    children: Array<never | MenuData>;
    forbidden?: boolean;
    type?: string;
  }
  interface MenuSelectParams {
    item: unknown;
    key: string;
    selectedKeys: string[];
  }
}
