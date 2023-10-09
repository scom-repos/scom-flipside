/// <amd-module name="@scom/scom-flipside/global/interfaces.ts" />
declare module "@scom/scom-flipside/global/interfaces.ts" {
    export interface IFlipsideConfig {
        componentId?: number;
        queryRunId?: string;
        options?: {
            [key: string]: any;
        };
        showHeader?: boolean;
        showFooter?: boolean;
    }
    export interface IProjectBlockWidget {
        guid: string;
        projectBlockGuid: string;
        widgetName: string;
        title: string;
        description: string;
        img: string;
        dataUri: string;
        status: 'active' | 'inactive';
    }
    export interface IFetchProjectBlockWidgetsResult {
        data: IProjectBlockWidget[];
    }
}
/// <amd-module name="@scom/scom-flipside/global/utils.ts" />
declare module "@scom/scom-flipside/global/utils.ts" {
    import { IFetchProjectBlockWidgetsResult } from "@scom/scom-flipside/global/interfaces.ts";
    export function fetchProjectBlockWidgets(): Promise<IFetchProjectBlockWidgetsResult>;
}
/// <amd-module name="@scom/scom-flipside/global/index.ts" />
declare module "@scom/scom-flipside/global/index.ts" {
    export * from "@scom/scom-flipside/global/interfaces.ts";
    export * from "@scom/scom-flipside/global/utils.ts";
}
/// <amd-module name="@scom/scom-flipside/index.css.ts" />
declare module "@scom/scom-flipside/index.css.ts" {
    export const containerStyle: string;
    export const flipsideStyle: string;
}
/// <amd-module name="@scom/scom-flipside/data.json.ts" />
declare module "@scom/scom-flipside/data.json.ts" {
    const _default: {
        id: number;
        title: string;
        description?: string;
        path: string;
        properties: {
            [key: string]: string | number | object;
        };
    }[];
    export default _default;
}
/// <amd-module name="@scom/scom-flipside" />
declare module "@scom/scom-flipside" {
    import { Module, ControlElement, Container, VStack } from '@ijstech/components';
    import { IFlipsideConfig } from "@scom/scom-flipside/global/index.ts";
    interface ScomFlipsideElement extends ControlElement, IFlipsideConfig {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-flipside']: ScomFlipsideElement;
            }
        }
    }
    export default class ScomFlipside extends Module {
        private vStackFlipside;
        private _data;
        tag: any;
        static create(options?: ScomFlipsideElement, parent?: Container): Promise<ScomFlipside>;
        constructor(parent?: Container, options?: ScomFlipsideElement);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        saveConfigData(data: any, tag: any): void;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                isReplacement: boolean;
                customUI: {
                    render: (data?: any, onReplace?: (data: any) => void) => Promise<VStack>;
                };
            }[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private renderPlaceholder;
        private showConfig;
        init(): Promise<void>;
        render(): any;
    }
}
