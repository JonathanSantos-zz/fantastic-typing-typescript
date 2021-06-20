export declare module GetProps {
  export type Test<T> = {
    props: T;
    isTest: boolean;
  };

  export type getProps = <T extends Test>(testType: T) => T['props'];
  export type objectTest = {
    child: string[];
    parent: boolean;
    value: number;
  };
}

export declare const getProps: GetProps.getProps;
export declare function Test<T extends Record<string, any>>(props: T): GetProps.Test<T>;
export declare const objectTest: GetProps.objectTest;
