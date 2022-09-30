import create from "zustand";

interface AppStoreProps {
  setPanelHide: () => void;
  panelHide: boolean;
  setActiveSideNav: (val: any) => void;
  activeSideNav: string;
  setMobileNavOpen: (val: any) => void;
  mobileNavOpen: boolean;
}

export const appStore = create<AppStoreProps>()((set, get) => ({
  panelHide: false,
  mobileNavOpen: false,
  activeSideNav: "Dashboard",
  setActiveSideNav: (val: any) => {
    set({ activeSideNav: val });
  },
  setPanelHide: () => {
    const currentState = get().panelHide;
    set({ panelHide: !currentState });
  },
  setMobileNavOpen: () => {
    const currentState = get().mobileNavOpen;
    set({ mobileNavOpen: !currentState });
  },
}));
