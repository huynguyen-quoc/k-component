import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme: theme,
  enableShortcuts: false,
  isToolshown: false,
  showNav: true,
});