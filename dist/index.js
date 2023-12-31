var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-flipside/global/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-flipside/global/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fetchProjectBlockWidgets = void 0;
    const API_URL = '/api/embed/v0';
    async function fetchProjectBlockWidgets() {
        let result;
        try {
            let response = await fetch(`${API_URL}/projectBlockWidgets`);
            result = await response.json();
        }
        catch (err) {
            console.error('[fetchProjectBlockWidgets] error: ', err);
        }
        return result;
    }
    exports.fetchProjectBlockWidgets = fetchProjectBlockWidgets;
});
define("@scom/scom-flipside/global/index.ts", ["require", "exports", "@scom/scom-flipside/global/interfaces.ts", "@scom/scom-flipside/global/utils.ts"], function (require, exports, interfaces_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-flipside/global/index.ts'/> 
    __exportStar(interfaces_1, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-flipside/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flipsideStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10,
    });
    exports.flipsideStyle = components_1.Styles.style({
        display: 'block',
        $nest: {
            '&.dune-dark--theme': {
                background: '#100c2a',
                $nest: {
                    'i-label': {
                        color: '#fff !important',
                    },
                    'i-label.text-black': {
                        color: '#000 !important',
                    },
                    'i-pagination': {
                        $nest: {
                            '.pagination a': {
                                color: '#fff !important',
                            },
                        },
                    },
                    'thead div': {
                        color: '#fff',
                    },
                    'i-table': {
                        $nest: {
                            'tr:hover td': {
                                background: '#251e60a1',
                            },
                            thead: {
                                background: '#ff9800',
                                color: '#fff !important',
                            },
                        },
                    },
                    'i-progress .i-progress_overlay': {
                        background: '#ff9800 !important',
                    },
                    'i-progress .i-progress_wrapbar .i-progress_bar.has-bg': {
                        background: '#d0c1c15e',
                    },
                    '::-webkit-scrollbar-track': {
                        background: '#d9bba859',
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: '#ff9800',
                    },
                },
            },
            'i-progress .i-progress_wrapbar': {
                borderRadius: 4,
            },
            'i-input input': {
                border: 'none',
                background: 'transparent',
            },
            'i-table': {
                fontSize: '12px',
                $nest: {
                    '.i-table-container': {
                        overflowY: 'auto',
                        height: 'inherit',
                    },
                    thead: {
                        background: 'var(--background-modal)',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                    },
                    'tr:hover td': {
                        background: 'var(--colors-secondary-main)',
                        color: 'var(--colors-secondary-contrast_text)',
                        $nest: {
                            'i-label': {
                                color: 'var(--colors-secondary-contrast_text)',
                            },
                        },
                    },
                },
            },
            'i-pagination': {
                lineHeight: '24px',
                $nest: {
                    '.pagination a': {
                        minWidth: 30,
                        height: 25,
                        fontSize: 12,
                        padding: '0 2px',
                    },
                    '.pagination a.active': {
                        background: '#ff9800',
                        borderColor: '#ff9800',
                    },
                },
            },
            '::-webkit-scrollbar': {
                width: '5px',
                height: '5px',
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '10px',
                border: '1px solid transparent',
                background: 'rgba(0, 0, 0, 0.12)',
            },
            '::-webkit-scrollbar-thumb': {
                background: 'rgba(0, 0, 0, 0.35)',
                borderRadius: '10px',
            },
            '#pnlModule': {
                height: '100%',
            },
        },
    });
});
define("@scom/scom-flipside/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-flipside/data.json.ts'/> 
    exports.default = [
        {
            id: 0,
            title: '[Counter] Axie',
            path: 'scom-counter',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Axie',
                options: {
                    counterColName: 'AXIE_NINETY_DAY_PCT',
                    counterLabel: 'Axie Infinity 90 Days Active User Changes',
                    stringDecimal: 2,
                    stringSuffix: '%'
                },
            },
        },
        {
            id: 1,
            title: '[Table] Gaming Stat - Daily Active User',
            path: 'scom-table',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Gaming Stat - Daily Active User',
                options: {
                    columns: [
                        {
                            name: 'ALIEN_DAILY_ACTIVE_USER',
                            title: 'Alien'
                        },
                        {
                            name: 'GENOPETS_DAILY_ACTIVE_USER',
                            title: 'Genopets'
                        },
                        {
                            name: 'NCG_DAILY_ACTIVE_USER',
                            title: 'NCG'
                        },
                        {
                            name: 'SWEAT_DAILY_ACTIVE_USER',
                            title: 'Sweat'
                        }
                    ]
                }
            }
        },
        {
            id: 2,
            title: '[Pie Chart] Distribution of Swaps By Volume (Avalanche TraderJoe)',
            path: 'scom-pie-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: 'fb7f8784-b948-4c6f-a96e-51b48a66a417',
                title: 'Distribution of Swaps By Volume (Avalanche TraderJoe)',
                options: {
                    xColumn: 'TYPE',
                    yColumn: 'TX_COUNT',
                    serieName: 'Tx Count',
                    numberFormat: '0,000.0a',
                    showDataLabels: true,
                    valuesOptions: [
                        { name: 'More Than $10,000', color: '#e58f8f' }
                    ]
                }
            }
        },
        {
            id: 3,
            title: '[Bar Chart] Active User - Transaction Count - Axie Infinity',
            path: 'scom-bar-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Active User - Transaction Count - Axie Infinity',
                options: {
                    xColumn: {
                        key: 'DT',
                        type: 'time'
                    },
                    yColumns: [
                        'AXIE_DAILY_ACTIVE_USER',
                        'AXIE_DAILY_TX_COUNT'
                    ],
                    seriesOptions: [
                        {
                            key: 'AXIE_DAILY_ACTIVE_USER',
                            title: 'Active User',
                            color: '#e58f8f'
                        },
                        {
                            key: 'AXIE_DAILY_TX_COUNT',
                            title: 'TX Count',
                            color: '#a9a4a4'
                        },
                    ],
                    legend: {
                        show: true
                    },
                    xAxis: {
                        title: 'Date',
                        tickFormat: 'MMM DD'
                    },
                    yAxis: {
                        title: 'ETH',
                        position: 'left',
                        tickFormat: '0[]a',
                        labelFormat: '0,000.ma'
                    }
                }
            }
        },
        {
            id: 4,
            title: '[Line Chart] Transaction Count - Axie Infinity',
            path: 'scom-line-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Transaction Count - Axie Infinity',
                options: {
                    xColumn: {
                        key: 'DT',
                        type: 'time'
                    },
                    yColumns: [
                        'AXIE_DAILY_TX_COUNT'
                    ],
                    seriesOptions: [
                        {
                            key: 'AXIE_DAILY_TX_COUNT',
                            title: 'TX Count',
                            color: '#000'
                        }
                    ],
                    xAxis: {
                        title: 'Date',
                        tickFormat: 'MMM DD'
                    },
                    yAxis: {
                        tickFormat: '0[]a',
                        position: 'left'
                    }
                }
            }
        },
        {
            id: 5,
            title: '[Area Chart] Transaction Count Per User By Protocol',
            path: 'scom-area-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Transaction Count Per User By Protocol',
                options: {
                    xColumn: {
                        key: 'DT',
                        type: 'time'
                    },
                    yColumns: [
                        'ALIEN_TX_PER_USER',
                        'AXIE_TX_PER_USER',
                        'SWEAT_TX_PER_USER',
                        'GENOPETS_TX_PER_USER',
                        'NCG_TX_PER_USER'
                    ],
                    legend: {
                        show: true
                    },
                    seriesOptions: [
                        {
                            key: 'ALIEN_TX_PER_USER',
                            title: 'Alien',
                            color: '#04e1cb'
                        },
                        {
                            key: 'AXIE_TX_PER_USER',
                            title: 'Axie',
                            color: '#1b96ff'
                        },
                        {
                            key: 'SWEAT_TX_PER_USER',
                            title: 'Sweat',
                            color: '#ba01ff'
                        },
                        {
                            key: 'GENOPETS_TX_PER_USER',
                            title: 'Genopets',
                            color: '#baec70'
                        },
                        {
                            key: 'NCG_TX_PER_USER',
                            title: 'NCG',
                            color: '#ff5d2d'
                        }
                    ],
                    xAxis: {
                        tickFormat: 'MMM YYYY'
                    },
                    yAxis: {
                        labelFormat: '0[,].00',
                        tickerFormat: '0[,].00',
                        position: 'left'
                    }
                }
            }
        },
        {
            id: 6,
            title: '[Scatter Chart] Transaction Count - Alien Worlds',
            path: 'scom-scatter-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Transaction Count - Alien Worlds',
                options: {
                    xColumn: {
                        key: 'DT',
                        type: 'time'
                    },
                    yColumns: [
                        'AXIE_DAILY_TX_COUNT'
                    ],
                    seriesOptions: [
                        {
                            key: 'AXIE_DAILY_TX_COUNT',
                            title: 'Axie Daily TX Count'
                        }
                    ],
                    xAxis: {
                        title: 'Date',
                        tickFormat: 'MMM DD'
                    },
                    yAxis: {
                        tickerFormat: '0[]a',
                        labelFormat: '0[].0a',
                        position: 'left'
                    }
                }
            }
        },
        {
            id: 7,
            title: '[Mixed Chart] Active User & Transaction Count - Axie Infinity',
            path: 'scom-mixed-chart',
            properties: {
                dataSource: 'Flipside',
                queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
                title: 'Active User & Transaction Count - Axie Infinity',
                options: {
                    xColumn: {
                        key: 'DT',
                        type: 'time'
                    },
                    yColumns: [
                        'AXIE_DAILY_ACTIVE_USER',
                        'AXIE_DAILY_TX_COUNT'
                    ],
                    globalSeriesType: 'bar',
                    stacking: false,
                    seriesOptions: [
                        {
                            key: 'AXIE_DAILY_ACTIVE_USER',
                            title: 'Active User',
                            type: 'bar',
                            yAxis: 'left',
                            color: '#2cb0d1'
                        },
                        {
                            key: 'AXIE_DAILY_TX_COUNT',
                            title: 'TX Count',
                            type: 'line',
                            yAxis: 'right',
                            color: '#26de26'
                        }
                    ],
                    xAxis: {
                        title: 'Date',
                        tickFormat: 'MMM DD'
                    },
                    leftYAxis: {
                        title: 'Active User',
                        tickFormat: '0[]a',
                        labelFormat: '0[].0a'
                    },
                    rightYAxis: {
                        title: 'TX Count',
                        tickFormat: '0[]a',
                        labelFormat: '0[].0a'
                    }
                }
            }
        },
    ];
});
define("@scom/scom-flipside", ["require", "exports", "@ijstech/components", "@scom/scom-flipside/index.css.ts", "@scom/scom-flipside/data.json.ts", "@scom/scom-configurator-settings"], function (require, exports, components_2, index_css_1, data_json_1, scom_configurator_settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    let ScomFlipside = class ScomFlipside extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = { componentId: 0 };
            this.tag = {};
            this.showConfig = () => {
                const ideToolbar = this.closest('ide-toolbar');
                if (ideToolbar) {
                    const btnSettings = ideToolbar
                        .querySelector('#toolsStack')
                        ?.querySelector('#toolbar')
                        ?.querySelector('[tool-name="Settings"]');
                    if (btnSettings) {
                        btnSettings.click();
                        return;
                    }
                }
            };
        }
        get showHeader() {
            return this._data.showHeader ?? true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        get showFooter() {
            return this._data.showFooter ?? true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            await this.renderPlaceholder();
        }
        getTag() {
            return this.tag;
        }
        async setTag(value, newTag) {
            if (newTag) {
                this.tag = {};
            }
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    this.tag[prop] = newValue[prop];
                }
            }
            this.width = this.tag.width || 700;
        }
        _getActions() {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        let _oldData = { componentId: -1 };
                        return {
                            execute: async () => {
                                _oldData = { ...this._data };
                                if (userInputData?.componentId !== undefined)
                                    this._data.componentId = userInputData.componentId;
                                if (builder?.setData)
                                    builder.setData(userInputData);
                                this.setData(this._data);
                            },
                            undo: () => {
                                if (builder?.setData)
                                    builder.setData(_oldData);
                                this.setData(_oldData);
                            },
                            redo: () => { },
                        };
                    },
                    isReplacement: true,
                    customUI: {
                        render: async (data, onReplace) => {
                            const vstack = new components_2.VStack();
                            const config = new scom_configurator_settings_1.default();
                            config.data = data_json_1.default;
                            // const result = await fetchProjectBlockWidgets();
                            // config.data = result.data.map((item, v) => {
                            //   return {
                            //     id: v,
                            //     title: item.title,
                            //     description: item.description,
                            //     path: item.widgetName,
                            //     dataUri: item.dataUri,
                            //   };
                            // });
                            if (this._data.options) {
                                config.showDetail({
                                    properties: { ...this._data },
                                    id: this._data.componentId,
                                    tag: { ...this.tag },
                                });
                            }
                            else if (this.tag) {
                                config.parentTags = { ...this.tag };
                            }
                            config.onSaveConfigData = (configData) => {
                                if (configData && onReplace) {
                                    const { path } = configData;
                                    onReplace({
                                        ...configData,
                                        module: {
                                            name: 'Flipside Block',
                                            path,
                                            category: 'charts',
                                        },
                                    });
                                }
                            };
                            vstack.append(config);
                            config.showSaveBtn = false;
                            return vstack;
                        },
                    },
                },
            ];
            return actions;
        }
        saveConfigData(data, tag) {
            if (data) {
                this.setData(data);
            }
            if (tag) {
                this.setTag(tag, true);
            }
        }
        getConfigurators() {
            const self = this;
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        return this._getActions();
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this),
                },
            ];
        }
        async renderPlaceholder() {
            this.vStackFlipside.clearInnerHTML();
            this.vStackFlipside.appendChild(this.$render("i-vstack", { gap: 20, horizontalAlignment: "center", verticalAlignment: "center", height: 100, maxHeight: "100%", onClick: this.showConfig, class: "pointer" },
                this.$render("i-label", { caption: "Flipside Block", font: { size: '20px' } }),
                this.$render("i-icon", { name: "plus", fill: Theme.colors.primary.contrastText, width: 36, height: 36 })));
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.classList.add(index_css_1.flipsideStyle);
            this.width = this.tag.width || 700;
            this.maxWidth = '100%';
            const tag = this.getAttribute('tag', true);
            if (tag) {
                this.setTag(tag);
            }
            const componentId = this.getAttribute('componentId', true, -1);
            const queryRunId = this.getAttribute('queryRunId', true);
            const options = this.getAttribute('options', true);
            this.setData({ componentId, queryRunId, options });
            this.showHeader = this.getAttribute('showHeader', true, true);
            this.showFooter = this.getAttribute('showFooter', true, true);
            this.isReadyCallbackQueued = false;
            this.executeReadyCallback();
        }
        render() {
            return (this.$render("i-panel", { display: "flex", height: "100%", width: "100%" },
                this.$render("i-vstack", { id: "vStackFlipside", gap: 20, height: "100%", background: { color: Theme.background.main }, padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle }),
                this.$render("i-modal", { id: "mdConfig", width: 1000 },
                    this.$render("i-panel", { id: "pnlConfig" }))));
        }
    };
    ScomFlipside = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-scom-flipside')
    ], ScomFlipside);
    exports.default = ScomFlipside;
});
