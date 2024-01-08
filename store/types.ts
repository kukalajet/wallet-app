type NonActionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonActionProperties<T> = Pick<T, NonActionPropertyNames<T>>;

type SetStore<Store> = (
  partial: Store | Partial<Store> | ((state: Store) => Store | Partial<Store>),
  replace?: boolean
) => void;

type GetStore<Store> = () => Store;

type StoreFieldStatus = 'initial' | 'loading' | 'success' | 'failure';
