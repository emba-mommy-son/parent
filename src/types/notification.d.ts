interface Notification {
  id: number;
  notificationType: NotificationType;
  message: string;
  createdAt: string;
  read: false;
}

enum NotificationType {
  // HEALTH = 'HEALTH',
  // NOTICE = 'NOTICE',
  // FRIENDS = 'FRIENDS',
  LOCATION = 'LOCATION',
  // CHILD_SIGN_IN = 'CHILD_SIGN_IN',
  // CHAT = 'CHAT',
  UNKNOWN = 'UNKNOWN',
}
