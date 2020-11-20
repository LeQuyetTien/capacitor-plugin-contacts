declare module '@capacitor/core' {
  interface PluginRegistry {
    Contacts: ContactsPlugin;
  }
}

export interface ContactsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
