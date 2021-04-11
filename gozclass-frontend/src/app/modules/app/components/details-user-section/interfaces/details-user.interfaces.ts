export interface DetailsUser {
    header: {
      title: string;
      icon: string;
    };
    items: Array<{
      icon: string;
      text?: string;
    }>
}
