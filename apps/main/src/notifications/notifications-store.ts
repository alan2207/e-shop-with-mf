import { uid } from "shared";
import { create } from "zustand";

export type NotificationType = "info" | "warning" | "success" | "error";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  duration?: number;
  message?: string;
};

export type NotificationsStore = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotifications = create<NotificationsStore>((set, get) => ({
  notifications: [],
  showNotification: (notification) => {
    const id = uid();
    set((state) => ({
      notifications: [...state.notifications, { id, ...notification }],
    }));
    if (notification.duration) {
      setTimeout(() => {
        get().dismissNotification(id);
      }, notification.duration);
    }
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  },
}));
