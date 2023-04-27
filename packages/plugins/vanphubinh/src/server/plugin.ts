import { InstallOptions, Plugin } from '@nocobase/server';

export class VanphubinhPlugin extends Plugin {
  afterAdd() {}

  beforeLoad() {}

  async load() {
    this.db.collection({
      name: 'vanphubinh',
      fields: [{ type: 'string', name: 'name' }],
    });
    this.app.acl.allow('vanphubinh', '*');
  }

  async install(options?: InstallOptions) {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default VanphubinhPlugin;
