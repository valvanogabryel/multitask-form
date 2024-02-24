export default interface AppState {
  name: string;
  email: string;
  phone: string;
  option: string | string[];
  plan: string | string[];
  services: string[];
}

export type SetAppState = React.Dispatch<React.SetStateAction<AppState>>;
