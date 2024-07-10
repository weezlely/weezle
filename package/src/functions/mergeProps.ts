type Props = Record<string, any>;

/**
 * 
 * @param propsObjects 
 * @returns 
 * 
 * Usage example
 * 
 * const props1 = { onClick: () => console.log('Clicked 1'), style: { color: 'red' }, id: 'button' };
 * const props2 = { onClick: () => console.log('Clicked 2'), style: { backgroundColor: 'blue' }, disabled: true };
 * 
 * const mergedProps = mergeProps(props1, props2);
 * console.log(mergedProps);
 * 
 * Output:
 * {
   onClick: [Function],
   style: { backgroundColor: 'blue' },
   id: 'button',
   disabled: true
}

 */
export function mergeProps(...propsObjects: Props[]): Props {
  const merged: Props = {};

  propsObjects.forEach((props) => {
    Object.keys(props).forEach((key) => {
      const existing = merged[key];
      const value = props[key];

      // Merge event handlers if they exist
      if (typeof existing === "function" && typeof value === "function") {
        merged[key] = (...args: any[]) => {
          existing(...args);
          value(...args);
        };
      } else {
        merged[key] = value;
      }
    });
  });

  return merged;
}
