const lightColors = {
  text: {
    default: '#172b4d',
    accent: {
      red: { default: '#ae2e24', bolder: '#5d1f1a' },
      orange: { default: '#a54800', bolder: '#702e00' },
      yellow: { default: '#7f5f01', bolder: '#533f04' },
      green: { default: '#216e4e', bolder: '#164b35' },
      teal: { default: '#206a83', bolder: '#164555' },
      blue: { default: '#0055cc', bolder: '#09326c' },
      purple: { default: '#5e4db2', bolder: '#352c63' },
      magenta: { default: '#943d73', bolder: '#50253f' },
      gray: { default: '#44546f', bolder: '#091e42' },
      lime: { default: '#4c6b1f', bolder: '#37471f' },
    },
    disabled: '#091e42',
    inverse: '#ffffff',
    selected: '#0c66e4',
    brand: '#0c66e4',
    danger: '#ae2e24',
    warning: '#a54800',
    success: '#216e4e',
    discovery: '#5e4db2',
    information: '#0055cc',
    subtlest: '#626f86',
    subtle: '#44546f',

    // NOTE: This is not part of the "official color palette" but is used in `Button`s. This is probably an inconsistency.
    // https://www.figma.com/file/QFAgLfUS64MhXHEr5CDCX2/ADS-Components-(Community)?node-id=33360%3A91454&mode=dev
    warningText: {
      inverse: '#172B4D',
    },
  },
  link: {
    default: '#0c66e4',
    pressed: '#0055cc',
    visited: '#5e4db2',
  },
  icon: {
    default: '#44546f',
    accent: {
      red: '#c9372c',
      orange: '#e56910',
      yellow: '#b38600',
      green: '#22a06b',
      teal: '#2898bd',
      blue: '#1d7afc',
      purple: '#8270db',
      magenta: '#cd519d',
      gray: '#758195',
      lime: '#6a9a23',
    },
    disabled: '#091e42',
    inverse: '#ffffff',
    selected: '#0c66e4',
    brand: '#0c66e4',
    danger: '#c9372c',
    warning: '#e56910',
    success: '#22a06b',
    discovery: '#8270db',
    information: '#1d7afc',
    subtle: '#626f86',
  },
  border: {
    default: '#091e42',
    accent: {
      red: '#e2483d',
      orange: '#e56910',
      yellow: '#b38600',
      green: '#22a06b',
      teal: '#2898bd',
      blue: '#1d7afc',
      purple: '#8270db',
      magenta: '#cd519d',
      gray: '#758195',
      lime: '#6a9a23',
    },
    disabled: '#091e42',
    focused: '#388bff',
    input: '#091e42',
    inverse: '#ffffff',
    selected: '#0c66e4',
    brand: '#0c66e4',
    danger: '#e2483d',
    warning: '#e56910',
    success: '#22a06b',
    discovery: '#8270db',
    information: '#1d7afc',
    bold: '#758195',
  },
  background: {
    accent: {
      red: {
        subtlest: {
          default: '#ffeceb',
          hovered: '#ffd5d2',
          pressed: '#fd9891',
        },
        subtler: {
          default: '#ffd5d2',
          hovered: '#fd9891',
          pressed: '#f87168',
        },
        subtle: {
          default: '#f87168',
          hovered: '#fd9891',
          pressed: '#ffd5d2',
        },
        bolder: {
          default: '#c9372c',
          hovered: '#ae2e24',
          pressed: '#5d1f1a',
        },
      },
      orange: {
        subtlest: {
          default: '#fff3eb',
          hovered: '#fedec8',
          pressed: '#fec195',
        },
        subtler: {
          default: '#fedec8',
          hovered: '#fec195',
          pressed: '#fea362',
        },
        subtle: {
          default: '#fea362',
          hovered: '#fec195',
          pressed: '#fedec8',
        },
        bolder: {
          default: '#c25100',
          hovered: '#a54800',
          pressed: '#702e00',
        },
      },
      yellow: {
        subtlest: {
          default: '#fff7d6',
          hovered: '#f8e6a0',
          pressed: '#f5cd47',
        },
        subtler: {
          default: '#f8e6a0',
          hovered: '#f5cd47',
          pressed: '#e2b203',
        },
        subtle: {
          default: '#f5cd47',
          hovered: '#e2b203',
          pressed: '#cf9f02',
        },
        bolder: {
          default: '#946f00',
          hovered: '#7f5f01',
          pressed: '#533f04',
        },
      },
      green: {
        subtlest: {
          default: '#dcfff1',
          hovered: '#baf3db',
          pressed: '#7ee2b8',
        },
        subtler: {
          default: '#baf3db',
          hovered: '#7ee2b8',
          pressed: '#4bce97',
        },
        subtle: {
          default: '#4bce97',
          hovered: '#7ee2b8',
          pressed: '#baf3db',
        },
        bolder: {
          default: '#1f845a',
          hovered: '#216e4e',
          pressed: '#164b35',
        },
      },
      teal: {
        subtlest: {
          default: '#e7f9ff',
          hovered: '#c6edfb',
          pressed: '#9dd9ee',
        },
        subtler: {
          default: '#c6edfb',
          hovered: '#9dd9ee',
          pressed: '#6cc3e0',
        },
        subtle: {
          default: '#6cc3e0',
          hovered: '#9dd9ee',
          pressed: '#c6edfb',
        },
        bolder: {
          default: '#227d9b',
          hovered: '#206a83',
          pressed: '#164555',
        },
      },
      blue: {
        subtlest: {
          default: '#e9f2ff',
          hovered: '#cce0ff',
          pressed: '#85b8ff',
        },
        subtler: {
          default: '#cce0ff',
          hovered: '#85b8ff',
          pressed: '#579dff',
        },
        subtle: {
          default: '#579dff',
          hovered: '#85b8ff',
          pressed: '#cce0ff',
        },
        bolder: {
          default: '#0c66e4',
          hovered: '#0055cc',
          pressed: '#09326c',
        },
      },
      purple: {
        subtlest: {
          default: '#f3f0ff',
          hovered: '#dfd8fd',
          pressed: '#b8acf6',
        },
        subtler: {
          default: '#dfd8fd',
          hovered: '#b8acf6',
          pressed: '#9f8fef',
        },
        subtle: {
          default: '#9f8fef',
          hovered: '#b8acf6',
          pressed: '#dfd8fd',
        },
        bolder: {
          default: '#6e5dc6',
          hovered: '#5e4db2',
          pressed: '#352c63',
        },
      },
      magenta: {
        subtlest: {
          default: '#ffecf8',
          hovered: '#fdd0ec',
          pressed: '#f797d2',
        },
        subtler: {
          default: '#fdd0ec',
          hovered: '#f797d2',
          pressed: '#e774bb',
        },
        subtle: {
          default: '#e774bb',
          hovered: '#f797d2',
          pressed: '#fdd0ec',
        },
        bolder: {
          default: '#ae4787',
          hovered: '#943d73',
          pressed: '#50253f',
        },
      },
      gray: {
        subtlest: {
          default: '#f1f2f4',
          hovered: '#dcdfe4',
          pressed: '#b3b9c4',
        },
        subtler: {
          default: '#dcdfe4',
          hovered: '#b3b9c4',
          pressed: '#8590a2',
        },
        subtle: {
          default: '#8590a2',
          hovered: '#b3b9c4',
          pressed: '#dcdfe4',
        },
        bolder: {
          default: '#626f86',
          hovered: '#44546f',
          pressed: '#2c3e5d',
        },
      },
      lime: {
        subtlest: {
          default: '#efffd6',
          hovered: '#d3f1a7',
          pressed: '#b3df72',
        },
        subtler: {
          default: '#d3f1a7',
          hovered: '#b3df72',
          pressed: '#94c748',
        },
        subtle: {
          default: '#94c748',
          hovered: '#b3df72',
          pressed: '#d3f1a7',
        },
        bolder: {
          default: '#5b7f24',
          hovered: '#4c6b1f',
          pressed: '#37471f',
        },
      },
    },
    disabled: '#091e42',
    input: {
      default: '#ffffff',
      hovered: '#f7f8f9',
      pressed: '#ffffff',
    },
    inverse: {
      subtle: {
        default: '#000000',
        hovered: '#000000',
        pressed: '#000000',
      },
    },
    neutral: {
      default: '#091e42',
      hovered: '#091e42',
      pressed: '#091e42',
      subtle: {
        default: '#000000',
        hovered: '#091e42',
        pressed: '#091e42',
      },
      bold: {
        default: '#44546f',
        hovered: '#2c3e5d',
        pressed: '#172b4d',
      },
    },
    selected: {
      default: '#e9f2ff',
      hovered: '#cce0ff',
      pressed: '#85b8ff',
      bold: {
        default: '#0c66e4',
        hovered: '#0055cc',
        pressed: '#09326c',
      },
    },
    brand: {
      bold: {
        default: '#0c66e4',
        hovered: '#0055cc',
        pressed: '#09326c',
      },
      subtlest: {
        default: '#e9f2ff',
        hovered: '#cce0ff',
        pressed: '#85b8ff',
      },
      boldest: {
        default: '#1c2b41',
        hovered: '#09326c',
        pressed: '#0055cc',
      },
    },
    danger: {
      default: '#ffeceb',
      hovered: '#ffd5d2',
      pressed: '#fd9891',
      bold: {
        default: '#c9372c',
        hovered: '#ae2e24',
        pressed: '#5d1f1a',
      },
    },
    warning: {
      default: '#fff7d6',
      hovered: '#f8e6a0',
      pressed: '#f5cd47',
      bold: {
        default: '#f5cd47',
        hovered: '#e2b203',
        pressed: '#cf9f02',
      },
    },
    success: {
      default: '#dcfff1',
      hovered: '#baf3db',
      pressed: '#7ee2b8',
      bold: {
        default: '#1f845a',
        hovered: '#216e4e',
        pressed: '#164b35',
      },
    },
    discovery: {
      default: '#f3f0ff',
      hovered: '#dfd8fd',
      pressed: '#b8acf6',
      bold: {
        default: '#6e5dc6',
        hovered: '#5e4db2',
        pressed: '#352c63',
      },
    },
    information: {
      default: '#e9f2ff',
      hovered: '#cce0ff',
      pressed: '#85b8ff',
      bold: {
        default: '#0c66e4',
        hovered: '#0055cc',
        pressed: '#09326c',
      },
    },
  },
  blanket: {
    default: '#091e42',
    selected: '#388bff',
    danger: '#ef5c48',
  },
  interaction: { hovered: '#000000', pressed: '#000000' },
  skeleton: { default: '#091e42', subtle: '#091e42' },
  chart: {
    categorical: {
      '1': { default: '#2898bd', hovered: '#227d9b' },
      '2': { default: '#5e4db2', hovered: '#352c63' },
      '3': { default: '#e56910', hovered: '#c25100' },
      '4': { default: '#943d73', hovered: '#50253f' },
      '5': { default: '#09326c', hovered: '#1c2b41' },
      '6': { default: '#8f7ee7', hovered: '#8270db' },
      '7': { default: '#50253f', hovered: '#3d2232' },
      '8': { default: '#a54800', hovered: '#702e00' },
    },
    neutral: { default: '#8590a2', hovered: '#758195' },
    red: {
      bold: { default: '#f15b50', hovered: '#e2483d' },
      bolder: { default: '#e2483d', hovered: '#c9372c' },
      boldest: { default: '#ae2e24', hovered: '#5d1f1a' },
    },
    orange: {
      bold: { default: '#e56910', hovered: '#c25100' },
      bolder: { default: '#c25100', hovered: '#a54800' },
      boldest: { default: '#a54800', hovered: '#702e00' },
    },
    yellow: {
      bold: { default: '#b38600', hovered: '#946f00' },
      bolder: { default: '#946f00', hovered: '#7f5f01' },
      boldest: { default: '#7f5f01', hovered: '#533f04' },
    },
    green: {
      bold: { default: '#22a06b', hovered: '#1f845a' },
      bolder: { default: '#1f845a', hovered: '#216e4e' },
      boldest: { default: '#216e4e', hovered: '#164b35' },
    },
    teal: {
      bold: { default: '#2898bd', hovered: '#227d9b' },
      bolder: { default: '#227d9b', hovered: '#206a83' },
      boldest: { default: '#206a83', hovered: '#164555' },
    },
    blue: {
      bold: { default: '#388bff', hovered: '#1d7afc' },
      bolder: { default: '#1d7afc', hovered: '#0c66e4' },
      boldest: { default: '#0055cc', hovered: '#09326c' },
    },
    purple: {
      bold: { default: '#8f7ee7', hovered: '#8270db' },
      bolder: { default: '#8270db', hovered: '#6e5dc6' },
      boldest: { default: '#5e4db2', hovered: '#352c63' },
    },
    magenta: {
      bold: { default: '#da62ac', hovered: '#cd519d' },
      bolder: { default: '#cd519d', hovered: '#ae4787' },
      boldest: { default: '#943d73', hovered: '#50253f' },
    },
    gray: {
      bold: { default: '#8590a2', hovered: '#758195' },
      bolder: { default: '#758195', hovered: '#626f86' },
      boldest: { default: '#44546f', hovered: '#2c3e5d' },
    },
    brand: { default: '#1d7afc', hovered: '#0c66e4' },
    danger: {
      default: '#f15b50',
      hovered: '#e2483d',
      bold: { default: '#ae2e24', hovered: '#5d1f1a' },
    },
    warning: {
      default: '#b38600',
      hovered: '#946f00',
      bold: { default: '#7f5f01', hovered: '#533f04' },
    },
    success: {
      default: '#22a06b',
      hovered: '#1f845a',
      bold: { default: '#216e4e', hovered: '#164b35' },
    },
    discovery: {
      default: '#8f7ee7',
      hovered: '#8270db',
      bold: { default: '#5e4db2', hovered: '#352c63' },
    },
    information: {
      default: '#388bff',
      hovered: '#1d7afc',
      bold: { default: '#0055cc', hovered: '#09326c' },
    },
    lime: {
      bold: { default: '#6a9a23', hovered: '#5b7f24' },
      bolder: { default: '#5b7f24', hovered: '#4c6b1f' },
      boldest: { default: '#4c6b1f', hovered: '#37471f' },
    },
  },
  elevation: {
    surface: {
      default: '#ffffff',
      hovered: '#f1f2f4',
      pressed: '#dcdfe4',
      overlay: {
        default: '#ffffff',
        hovered: '#f1f2f4',
        pressed: '#dcdfe4',
      },
      raised: {
        default: '#ffffff',
        hovered: '#f1f2f4',
        pressed: '#dcdfe4',
      },
      sunken: { default: '#f7f8f9' },
    },
    shadow: {
      overflow: { perimeter: '#091e42', spread: '#091e42' },
    },
  },
} as const;

const darkColors = {
  text: {
    default: '#b6c2cf',
    accent: {
      red: { default: '#fd9891', bolder: '#ffd5d2' },
      orange: { default: '#fec195', bolder: '#fedec8' },
      yellow: { default: '#f5cd47', bolder: '#f8e6a0' },
      green: { default: '#7ee2b8', bolder: '#baf3db' },
      teal: { default: '#9dd9ee', bolder: '#c6edfb' },
      blue: { default: '#85b8ff', bolder: '#cce0ff' },
      purple: { default: '#b8acf6', bolder: '#dfd8fd' },
      magenta: { default: '#f797d2', bolder: '#fdd0ec' },
      gray: { default: '#9fadbc', bolder: '#dee4ea' },
      lime: { default: '#b3df72', bolder: '#d3f1a7' },
    },
    disabled: '#bfdbf8',
    inverse: '#1d2125',
    selected: '#579dff',
    brand: '#579dff',
    danger: '#fd9891',
    warning: '#f5cd47',
    success: '#7ee2b8',
    discovery: '#b8acf6',
    information: '#85b8ff',
    subtlest: '#8c9bab',
    subtle: '#9fadbc',

    // NOTE: This is not part of the "official color palette" but is used in `Button`s. This is probably an inconsistency.
    // https://www.figma.com/file/QFAgLfUS64MhXHEr5CDCX2/ADS-Components-(Community)?node-id=33360%3A91454&mode=dev
    warningText: {
      inverse: '#1D2125',
    },
  },
  link: {
    default: '#579dff',
    pressed: '#85b8ff',
    visited: '#b8acf6',
  },
  icon: {
    default: '#9fadbc',
    accent: {
      red: '#e2483d',
      orange: '#f38a3f',
      yellow: '#f5cd47',
      green: '#2abb7f',
      teal: '#42b2d7',
      blue: '#388bff',
      purple: '#8f7ee7',
      magenta: '#da62ac',
      gray: '#738496',
      lime: '#82b536',
    },
    disabled: '#bfdbf8',
    inverse: '#1d2125',
    selected: '#579dff',
    brand: '#579dff',
    danger: '#f15b50',
    warning: '#f5cd47',
    success: '#2abb7f',
    discovery: '#8f7ee7',
    information: '#388bff',
    subtle: '#8c9bab',
  },
  border: {
    default: '#a6c5e2',
    accent: {
      red: '#f15b50',
      orange: '#f38a3f',
      yellow: '#cf9f02',
      green: '#2abb7f',
      teal: '#42b2d7',
      blue: '#388bff',
      purple: '#8f7ee7',
      magenta: '#da62ac',
      gray: '#738496',
      lime: '#82b536',
    },
    disabled: '#a1bdd9',
    focused: '#85b8ff',
    input: '#a6c5e2',
    inverse: '#161a1d',
    selected: '#579dff',
    brand: '#579dff',
    danger: '#f15b50',
    warning: '#cf9f02',
    success: '#2abb7f',
    discovery: '#8f7ee7',
    information: '#388bff',
    bold: '#738496',
  },
  background: {
    accent: {
      red: {
        subtlest: {
          default: '#42221f',
          hovered: '#5d1f1a',
          pressed: '#ae2e24',
        },
        subtler: {
          default: '#5d1f1a',
          hovered: '#ae2e24',
          pressed: '#c9372c',
        },
        subtle: {
          default: '#ae2e24',
          hovered: '#5d1f1a',
          pressed: '#42221f',
        },
        bolder: {
          default: '#f87168',
          hovered: '#fd9891',
          pressed: '#ffd5d2',
        },
      },
      orange: {
        subtlest: {
          default: '#38291e',
          hovered: '#702e00',
          pressed: '#a54800',
        },
        subtler: {
          default: '#702e00',
          hovered: '#a54800',
          pressed: '#c25100',
        },
        subtle: {
          default: '#a54800',
          hovered: '#702e00',
          pressed: '#38291e',
        },
        bolder: {
          default: '#fea362',
          hovered: '#fec195',
          pressed: '#fedec8',
        },
      },
      yellow: {
        subtlest: {
          default: '#332e1b',
          hovered: '#533f04',
          pressed: '#7f5f01',
        },
        subtler: {
          default: '#533f04',
          hovered: '#7f5f01',
          pressed: '#946f00',
        },
        subtle: {
          default: '#7f5f01',
          hovered: '#533f04',
          pressed: '#332e1b',
        },
        bolder: {
          default: '#e2b203',
          hovered: '#f5cd47',
          pressed: '#f8e6a0',
        },
      },
      green: {
        subtlest: {
          default: '#1c3329',
          hovered: '#164b35',
          pressed: '#216e4e',
        },
        subtler: {
          default: '#164b35',
          hovered: '#216e4e',
          pressed: '#1f845a',
        },
        subtle: {
          default: '#216e4e',
          hovered: '#164b35',
          pressed: '#1c3329',
        },
        bolder: {
          default: '#4bce97',
          hovered: '#7ee2b8',
          pressed: '#baf3db',
        },
      },
      teal: {
        subtlest: {
          default: '#1e3137',
          hovered: '#164555',
          pressed: '#206a83',
        },
        subtler: {
          default: '#164555',
          hovered: '#206a83',
          pressed: '#227d9b',
        },
        subtle: {
          default: '#206a83',
          hovered: '#164555',
          pressed: '#1e3137',
        },
        bolder: {
          default: '#6cc3e0',
          hovered: '#9dd9ee',
          pressed: '#c6edfb',
        },
      },
      blue: {
        subtlest: {
          default: '#1c2b41',
          hovered: '#09326c',
          pressed: '#0055cc',
        },
        subtler: {
          default: '#09326c',
          hovered: '#0055cc',
          pressed: '#0c66e4',
        },
        subtle: {
          default: '#0055cc',
          hovered: '#09326c',
          pressed: '#1c2b41',
        },
        bolder: {
          default: '#579dff',
          hovered: '#85b8ff',
          pressed: '#cce0ff',
        },
      },
      purple: {
        subtlest: {
          default: '#2b273f',
          hovered: '#352c63',
          pressed: '#5e4db2',
        },
        subtler: {
          default: '#352c63',
          hovered: '#5e4db2',
          pressed: '#6e5dc6',
        },
        subtle: {
          default: '#5e4db2',
          hovered: '#352c63',
          pressed: '#2b273f',
        },
        bolder: {
          default: '#9f8fef',
          hovered: '#b8acf6',
          pressed: '#dfd8fd',
        },
      },
      magenta: {
        subtlest: {
          default: '#3d2232',
          hovered: '#50253f',
          pressed: '#943d73',
        },
        subtler: {
          default: '#50253f',
          hovered: '#943d73',
          pressed: '#ae4787',
        },
        subtle: {
          default: '#943d73',
          hovered: '#50253f',
          pressed: '#3d2232',
        },
        bolder: {
          default: '#e774bb',
          hovered: '#f797d2',
          pressed: '#fdd0ec',
        },
      },
      gray: {
        subtlest: {
          default: '#2c333a',
          hovered: '#38414a',
          pressed: '#454f59',
        },
        subtler: {
          default: '#454f59',
          hovered: '#596773',
          pressed: '#738496',
        },
        subtle: {
          default: '#596773',
          hovered: '#454f59',
          pressed: '#38414a',
        },
        bolder: {
          default: '#8c9bab',
          hovered: '#9fadbc',
          pressed: '#b6c2cf',
        },
      },
      lime: {
        subtlest: {
          default: '#28311b',
          hovered: '#37471f',
          pressed: '#4c6b1f',
        },
        subtler: {
          default: '#37471f',
          hovered: '#4c6b1f',
          pressed: '#5b7f24',
        },
        subtle: {
          default: '#4c6b1f',
          hovered: '#37471f',
          pressed: '#28311b',
        },
        bolder: {
          default: '#94c748',
          hovered: '#b3df72',
          pressed: '#d3f1a7',
        },
      },
    },
    disabled: '#030404',
    input: {
      default: '#22272b',
      hovered: '#282e33',
      pressed: '#22272b',
    },
    inverse: {
      subtle: {
        default: '#ffffff',
        hovered: '#ffffff',
        pressed: '#ffffff',
      },
    },
    neutral: {
      default: '#a1bdd9',
      hovered: '#a6c5e2',
      pressed: '#bfdbf8',
      subtle: {
        default: '#ffffff',
        hovered: '#a1bdd9',
        pressed: '#a6c5e2',
      },
      bold: {
        default: '#9fadbc',
        hovered: '#b6c2cf',
        pressed: '#c7d1db',
      },
    },
    selected: {
      default: '#1c2b41',
      hovered: '#09326c',
      pressed: '#0055cc',
      bold: {
        default: '#579dff',
        hovered: '#85b8ff',
        pressed: '#cce0ff',
      },
    },
    brand: {
      bold: {
        default: '#579dff',
        hovered: '#85b8ff',
        pressed: '#cce0ff',
      },
      subtlest: {
        default: '#1c2b41',
        hovered: '#09326c',
        pressed: '#0055cc',
      },
      boldest: {
        default: '#e9f2ff',
        hovered: '#cce0ff',
        pressed: '#85b8ff',
      },
    },
    danger: {
      default: '#42221f',
      hovered: '#5d1f1a',
      pressed: '#ae2e24',
      bold: {
        default: '#f87168',
        hovered: '#fd9891',
        pressed: '#ffd5d2',
      },
    },
    warning: {
      default: '#332e1b',
      hovered: '#533f04',
      pressed: '#7f5f01',
      bold: {
        default: '#f5cd47',
        hovered: '#e2b203',
        pressed: '#cf9f02',
      },
    },
    success: {
      default: '#1c3329',
      hovered: '#164b35',
      pressed: '#216e4e',
      bold: {
        default: '#4bce97',
        hovered: '#7ee2b8',
        pressed: '#baf3db',
      },
    },
    discovery: {
      default: '#2b273f',
      hovered: '#352c63',
      pressed: '#5e4db2',
      bold: {
        default: '#9f8fef',
        hovered: '#b8acf6',
        pressed: '#dfd8fd',
      },
    },
    information: {
      default: '#1c2b41',
      hovered: '#09326c',
      pressed: '#0055cc',
      bold: {
        default: '#579dff',
        hovered: '#85b8ff',
        pressed: '#cce0ff',
      },
    },
  },
  blanket: {
    default: '#101214',
    selected: '#1d7afc',
    danger: '#e34935',
  },
  interaction: { hovered: '#ffffff', pressed: '#ffffff' },
  skeleton: { default: '#a1bdd9', subtle: '#bcd6f0' },
  chart: {
    categorical: {
      '1': { default: '#2898bd', hovered: '#42b2d7' },
      '2': { default: '#b8acf6', hovered: '#dfd8fd' },
      '3': { default: '#e56910', hovered: '#f38a3f' },
      '4': { default: '#f797d2', hovered: '#fdd0ec' },
      '5': { default: '#cce0ff', hovered: '#e9f2ff' },
      '6': { default: '#8270db', hovered: '#8f7ee7' },
      '7': { default: '#fdd0ec', hovered: '#ffecf8' },
      '8': { default: '#fec195', hovered: '#fedec8' },
    },
    neutral: { default: '#738496', hovered: '#8c9bab' },
    red: {
      bold: { default: '#e2483d', hovered: '#f15b50' },
      bolder: { default: '#f15b50', hovered: '#f87168' },
      boldest: { default: '#fd9891', hovered: '#ffd5d2' },
    },
    orange: {
      bold: { default: '#f38a3f', hovered: '#fea362' },
      bolder: { default: '#fea362', hovered: '#fec195' },
      boldest: { default: '#fec195', hovered: '#fedec8' },
    },
    yellow: {
      bold: { default: '#cf9f02', hovered: '#e2b203' },
      bolder: { default: '#e2b203', hovered: '#f5cd47' },
      boldest: { default: '#f5cd47', hovered: '#f8e6a0' },
    },
    green: {
      bold: { default: '#2abb7f', hovered: '#4bce97' },
      bolder: { default: '#4bce97', hovered: '#7ee2b8' },
      boldest: { default: '#7ee2b8', hovered: '#baf3db' },
    },
    teal: {
      bold: { default: '#42b2d7', hovered: '#6cc3e0' },
      bolder: { default: '#6cc3e0', hovered: '#9dd9ee' },
      boldest: { default: '#9dd9ee', hovered: '#c6edfb' },
    },
    blue: {
      bold: { default: '#1d7afc', hovered: '#388bff' },
      bolder: { default: '#388bff', hovered: '#579dff' },
      boldest: { default: '#85b8ff', hovered: '#cce0ff' },
    },
    purple: {
      bold: { default: '#8270db', hovered: '#8f7ee7' },
      bolder: { default: '#8f7ee7', hovered: '#9f8fef' },
      boldest: { default: '#b8acf6', hovered: '#dfd8fd' },
    },
    magenta: {
      bold: { default: '#cd519d', hovered: '#da62ac' },
      bolder: { default: '#da62ac', hovered: '#e774bb' },
      boldest: { default: '#f797d2', hovered: '#fdd0ec' },
    },
    gray: {
      bold: { default: '#738496', hovered: '#8c9bab' },
      bolder: { default: '#8c9bab', hovered: '#9fadbc' },
      boldest: { default: '#9fadbc', hovered: '#b6c2cf' },
    },
    brand: { default: '#388bff', hovered: '#579dff' },
    danger: {
      default: '#e2483d',
      hovered: '#f15b50',
      bold: { default: '#fd9891', hovered: '#ffd5d2' },
    },
    warning: {
      default: '#cf9f02',
      hovered: '#e2b203',
      bold: { default: '#f5cd47', hovered: '#f8e6a0' },
    },
    success: {
      default: '#2abb7f',
      hovered: '#4bce97',
      bold: { default: '#7ee2b8', hovered: '#baf3db' },
    },
    discovery: {
      default: '#8270db',
      hovered: '#8f7ee7',
      bold: { default: '#b8acf6', hovered: '#dfd8fd' },
    },
    information: {
      default: '#1d7afc',
      hovered: '#388bff',
      bold: { default: '#85b8ff', hovered: '#cce0ff' },
    },
    lime: {
      bold: { default: '#82b536', hovered: '#94c748' },
      bolder: { default: '#94c748', hovered: '#b3df72' },
      boldest: { default: '#b3df72', hovered: '#d3f1a7' },
    },
  },
  elevation: {
    surface: {
      default: '#1d2125',
      hovered: '#22272b',
      pressed: '#282e33',
      overlay: {
        default: '#282e33',
        hovered: '#2c333a',
        pressed: '#38414a',
      },
      raised: {
        default: '#22272b',
        hovered: '#282e33',
        pressed: '#2c333a',
      },
      sunken: { default: '#161a1d' },
    },
    shadow: {
      overflow: { perimeter: '#030404', spread: '#030404' },
    },
  },
} as const;

export { lightColors, darkColors };
