import {
    BUILD_TOOL_ICON_MAPPING,
    FRAMEWORK_ICON_MAPPING,
    LANGUAGE_ICON_MAPPING,
} from '../../icon-mappings';
import {
    CODEBASE_COMMON_BUILD_TOOLS,
    CODEBASE_COMMON_FRAMEWORKS,
    CODEBASE_COMMON_LANGUAGES,
} from '../index';
import { CodebaseInterface, CodebaseMappingKey } from '../types';

export type LibraryLanguageKeys =
    | typeof CODEBASE_COMMON_LANGUAGES.JAVA
    | typeof CODEBASE_COMMON_LANGUAGES.JAVASCRIPT
    | typeof CODEBASE_COMMON_LANGUAGES.DOTNET
    | typeof CODEBASE_COMMON_LANGUAGES.PYTHON
    | typeof CODEBASE_COMMON_LANGUAGES.GROOVY_PIPELINE
    | typeof CODEBASE_COMMON_LANGUAGES.HCL
    | typeof CODEBASE_COMMON_LANGUAGES.REGO
    | typeof CODEBASE_COMMON_LANGUAGES.CONTAINER
    | typeof CODEBASE_COMMON_LANGUAGES.HELM
    | typeof CODEBASE_COMMON_LANGUAGES.C_SHARP
    | typeof CODEBASE_COMMON_LANGUAGES.OTHER;

type LibraryMappingKey = Extract<CodebaseMappingKey, LibraryLanguageKeys>;

export type LibraryMapping = {
    [K in LibraryMappingKey]: CodebaseInterface;
};

export const LIBRARY_MAPPING: LibraryMapping = {
    [CODEBASE_COMMON_LANGUAGES.JAVA]: {
        language: {
            name: 'Java',
            value: CODEBASE_COMMON_LANGUAGES.JAVA,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.JAVA],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.JAVA8]: {
                name: 'Java 8',
                value: CODEBASE_COMMON_FRAMEWORKS.JAVA8,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.JAVA8],
            },
            [CODEBASE_COMMON_FRAMEWORKS.JAVA11]: {
                name: 'Java 11',
                value: CODEBASE_COMMON_FRAMEWORKS.JAVA11,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.JAVA11],
            },
            [CODEBASE_COMMON_FRAMEWORKS.JAVA17]: {
                name: 'Java 17',
                value: CODEBASE_COMMON_FRAMEWORKS.JAVA17,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.JAVA17],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.GRADLE]: {
                name: 'Gradle',
                value: CODEBASE_COMMON_BUILD_TOOLS.GRADLE,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.GRADLE],
            },
            [CODEBASE_COMMON_BUILD_TOOLS.MAVEN]: {
                name: 'Maven',
                value: CODEBASE_COMMON_BUILD_TOOLS.MAVEN,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.MAVEN],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.JAVASCRIPT]: {
        language: {
            name: 'JavaScript',
            value: CODEBASE_COMMON_LANGUAGES.JAVASCRIPT,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.JAVASCRIPT],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.REACT]: {
                name: 'React',
                value: CODEBASE_COMMON_FRAMEWORKS.REACT,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.REACT],
            },
            [CODEBASE_COMMON_FRAMEWORKS.VUE]: {
                name: 'Vue',
                value: CODEBASE_COMMON_FRAMEWORKS.VUE,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.VUE],
            },
            [CODEBASE_COMMON_FRAMEWORKS.ANGULAR]: {
                name: 'Angular',
                value: CODEBASE_COMMON_FRAMEWORKS.ANGULAR,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.ANGULAR],
            },
            [CODEBASE_COMMON_FRAMEWORKS.EXPRESS]: {
                name: 'Express',
                value: CODEBASE_COMMON_FRAMEWORKS.EXPRESS,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.EXPRESS],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.NPM]: {
                name: 'NPM',
                value: CODEBASE_COMMON_BUILD_TOOLS.NPM,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.NPM],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.DOTNET]: {
        language: {
            name: '.NET',
            value: CODEBASE_COMMON_LANGUAGES.DOTNET,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.DOTNET],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1]: {
                name: '.NET 3.1',
                value: CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.DOTNET]: {
                name: '.NET',
                value: CODEBASE_COMMON_BUILD_TOOLS.DOTNET,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.DOTNET],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.PYTHON]: {
        language: {
            name: 'Python',
            value: CODEBASE_COMMON_LANGUAGES.PYTHON,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.PYTHON],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.PYTHON_3_8]: {
                name: 'Python 3.8',
                value: CODEBASE_COMMON_FRAMEWORKS.PYTHON_3_8,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.PYTHON_3_8],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.PYTHON]: {
                name: 'Python',
                value: CODEBASE_COMMON_BUILD_TOOLS.PYTHON,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.PYTHON],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.GROOVY_PIPELINE]: {
        language: {
            name: 'Groovy-pipeline',
            value: CODEBASE_COMMON_LANGUAGES.GROOVY_PIPELINE,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.GROOVY_PIPELINE],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.CODENARC]: {
                name: 'Codenarc',
                value: CODEBASE_COMMON_FRAMEWORKS.CODENARC,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.CODENARC],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.CODENARC]: {
                name: 'Codenarc',
                value: CODEBASE_COMMON_BUILD_TOOLS.CODENARC,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.CODENARC],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.HCL]: {
        language: {
            name: 'HCL',
            value: CODEBASE_COMMON_LANGUAGES.HCL,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.HCL],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.TERRAFORM]: {
                name: 'Terraform',
                value: CODEBASE_COMMON_FRAMEWORKS.TERRAFORM,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.TERRAFORM],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.TERRAFORM]: {
                name: 'Terraform',
                value: CODEBASE_COMMON_BUILD_TOOLS.TERRAFORM,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.TERRAFORM],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.REGO]: {
        language: {
            name: 'Rego',
            value: CODEBASE_COMMON_LANGUAGES.REGO,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.REGO],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.OPA]: {
                name: 'OPA',
                value: CODEBASE_COMMON_FRAMEWORKS.OPA,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.OPA],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.OPA]: {
                name: 'OPA',
                value: CODEBASE_COMMON_BUILD_TOOLS.OPA,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.OPA],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.CONTAINER]: {
        language: {
            name: 'Container',
            value: CODEBASE_COMMON_LANGUAGES.CONTAINER,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.CONTAINER],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.DOCKER]: {
                name: 'Docker',
                value: CODEBASE_COMMON_FRAMEWORKS.DOCKER,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.DOCKER],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.KANIKO]: {
                name: 'Kaniko',
                value: CODEBASE_COMMON_BUILD_TOOLS.KANIKO,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.KANIKO],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.HELM]: {
        language: {
            name: 'Helm',
            value: CODEBASE_COMMON_LANGUAGES.HELM,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.HELM],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.CHARTS]: {
                name: 'Charts',
                value: CODEBASE_COMMON_FRAMEWORKS.CHARTS,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.CHARTS],
            },
            [CODEBASE_COMMON_FRAMEWORKS.PIPELINE]: {
                name: 'Pipeline',
                value: CODEBASE_COMMON_FRAMEWORKS.PIPELINE,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.PIPELINE],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.HELM]: {
                name: 'Helm',
                value: CODEBASE_COMMON_BUILD_TOOLS.HELM,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.HELM],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.C_SHARP]: {
        language: {
            name: 'C#',
            value: CODEBASE_COMMON_LANGUAGES.C_SHARP,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.C_SHARP],
        },
        frameworks: {
            [CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1]: {
                name: '.NET 3.1',
                value: CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1],
            },
            [CODEBASE_COMMON_FRAMEWORKS.DOTNET_6_0]: {
                name: '.NET 6.0',
                value: CODEBASE_COMMON_FRAMEWORKS.DOTNET_6_0,
                icon: FRAMEWORK_ICON_MAPPING[CODEBASE_COMMON_FRAMEWORKS.DOTNET_6_0],
            },
        },
        buildTools: {
            [CODEBASE_COMMON_BUILD_TOOLS.DOTNET]: {
                name: '.NET',
                value: CODEBASE_COMMON_BUILD_TOOLS.DOTNET,
                icon: BUILD_TOOL_ICON_MAPPING[CODEBASE_COMMON_BUILD_TOOLS.DOTNET],
            },
        },
    },
    [CODEBASE_COMMON_LANGUAGES.OTHER]: {
        language: {
            name: 'Other',
            value: CODEBASE_COMMON_LANGUAGES.OTHER,
            icon: LANGUAGE_ICON_MAPPING[CODEBASE_COMMON_LANGUAGES.OTHER],
        },
        frameworks: {},
        buildTools: {},
    },
};
