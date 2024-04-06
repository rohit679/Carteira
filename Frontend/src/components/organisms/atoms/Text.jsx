import classNames from 'classnames';

const Text = ({ children, size='md', weight="normal", color="black", colorWeight="4x", classname = '' }) => {
  return (
    <div className={classNames(`
      ${
        {
          'xs': 'text-[12px] 2xl:text-[16px]',
          'sm': 'text-[16px] 2xl:text-[20px]',
          'md': 'text-[20px] 2xl:text-[24px]',
          'lg': 'text-[24px] 2xl:text-[28px]',
          'xl': 'text-[28px] 2xl:text-[32px]',
          '2xl': 'text-[32px] 2xl:text-[36px]',
          '3xl': 'text-[36px] 2xl:text-[40px]',
          '4xl': 'text-[40px] 2xl:text-[44px]',
          '5xl': 'text-[44px] 2xl:text-[48px]',
          '6xl': 'text-[48px] 2xl:text-[52px]',
          '7xl': 'text-[52px] 2xl:text-[56px]',
          '8xl': 'text-[56px] 2xl:text-[60px]',
          '9xl': 'text-[60px] 2xl:text-[64px]',
        }[size]
      }
      ${
        {
          'light': 'font-thin',
          'normal': 'font-normal',
          'medium': 'font-medium',
          'semibold': 'font-semibold',
          'bold': 'font-bold',
        }[weight]
      },
      ${
        {
          '1x': `text-${color}-100`,
          '2x': `text-${color}-200`,
          '3x': `text-${color}-300`,
          '4x': `text-${color}-400`,
          '5x': `text-${color}-500`,
          '6x': `text-${color}-600`,
          '7x': `text-${color}-700`,
          '8x': `text-${color}-800`,
          '9x': `text-${color}-900`,
        }[colorWeight]
      }
      font-lato tracking-wide ${classname}
    `)}>
      {children}
    </div>
  );
};

export default Text;