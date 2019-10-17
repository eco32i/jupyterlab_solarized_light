import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab_solarized_light
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_solarized_light:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'jupyterlab_solarized_light/index.css';

    manager.register({
      name: 'jupyterlab_solarized_light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
