import { WebPlugin } from '@capacitor/core';
import { ContactsPlugin } from './definitions';

export class ContactsWeb extends WebPlugin implements ContactsPlugin {
  constructor() {
    super({
      name: 'Contacts',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getContacts(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [
        {
          firstName: 'Tien',
          lastName: 'Le',
          telephone: '0903566472',
        },
      ],
    };
  }
}

const Contacts = new ContactsWeb();

export { Contacts };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Contacts);
