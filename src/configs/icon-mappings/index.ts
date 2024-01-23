import { CI_TOOLS } from '../../constants/ciTools';
import { GIT_PROVIDERS } from '../../constants/gitProviders';
import { RESOURCE_ICON_NAMES } from '../../icons/sprites/Resources/names';
import { CONTAINER_REGISTRY_TYPE } from '../../k8s/ConfigMap/constants';
import {
  CODEBASE_COMMON_BUILD_TOOLS,
  CODEBASE_COMMON_FRAMEWORKS,
  CODEBASE_COMMON_LANGUAGES,
} from '../codebase-mappings';

export const LANGUAGE_ICON_MAPPING = {
  [CODEBASE_COMMON_LANGUAGES.JAVA]: RESOURCE_ICON_NAMES.JAVA,
  [CODEBASE_COMMON_LANGUAGES.JAVASCRIPT]: RESOURCE_ICON_NAMES.JAVASCRIPT,
  [CODEBASE_COMMON_LANGUAGES.PYTHON]: RESOURCE_ICON_NAMES.PYTHON,
  [CODEBASE_COMMON_LANGUAGES.GROOVY_PIPELINE]: RESOURCE_ICON_NAMES.GROOVY_PIPELINE,
  [CODEBASE_COMMON_LANGUAGES.HCL]: RESOURCE_ICON_NAMES.TERRAFORM,
  [CODEBASE_COMMON_LANGUAGES.REGO]: RESOURCE_ICON_NAMES.OPA,
  [CODEBASE_COMMON_LANGUAGES.CONTAINER]: RESOURCE_ICON_NAMES.CONTAINER,
  [CODEBASE_COMMON_LANGUAGES.HELM]: RESOURCE_ICON_NAMES.HELM,
  [CODEBASE_COMMON_LANGUAGES.GO]: RESOURCE_ICON_NAMES.GO,
  [CODEBASE_COMMON_LANGUAGES.C_SHARP]: RESOURCE_ICON_NAMES.C_SHARP,
  [CODEBASE_COMMON_LANGUAGES.OTHER]: RESOURCE_ICON_NAMES.OTHER,
} as const;

export const FRAMEWORK_ICON_MAPPING = {
  [CODEBASE_COMMON_FRAMEWORKS.JAVA8]: RESOURCE_ICON_NAMES.JAVA,
  [CODEBASE_COMMON_FRAMEWORKS.JAVA11]: RESOURCE_ICON_NAMES.JAVA,
  [CODEBASE_COMMON_FRAMEWORKS.JAVA17]: RESOURCE_ICON_NAMES.JAVA,
  [CODEBASE_COMMON_FRAMEWORKS.DOTNET_3_1]: RESOURCE_ICON_NAMES.DOTNET,
  [CODEBASE_COMMON_FRAMEWORKS.DOTNET_6_0]: RESOURCE_ICON_NAMES.DOTNET,
  [CODEBASE_COMMON_FRAMEWORKS.PYTHON_3_8]: RESOURCE_ICON_NAMES.PYTHON,
  [CODEBASE_COMMON_FRAMEWORKS.REACT]: RESOURCE_ICON_NAMES.REACT,
  [CODEBASE_COMMON_FRAMEWORKS.CODENARC]: RESOURCE_ICON_NAMES.CODENARC,
  [CODEBASE_COMMON_FRAMEWORKS.TERRAFORM]: RESOURCE_ICON_NAMES.TERRAFORM,
  [CODEBASE_COMMON_FRAMEWORKS.OPA]: RESOURCE_ICON_NAMES.OPA,
  [CODEBASE_COMMON_FRAMEWORKS.DOCKER]: RESOURCE_ICON_NAMES.DOCKER,
  [CODEBASE_COMMON_FRAMEWORKS.PIPELINE]: RESOURCE_ICON_NAMES.TEKTON,
  [CODEBASE_COMMON_FRAMEWORKS.OPERATOR_SDK]: RESOURCE_ICON_NAMES.OPERATOR_SDK,
  [CODEBASE_COMMON_FRAMEWORKS.BEEGO]: RESOURCE_ICON_NAMES.BEEGO,
  [CODEBASE_COMMON_FRAMEWORKS.FLASK]: RESOURCE_ICON_NAMES.FLASK,
  [CODEBASE_COMMON_FRAMEWORKS.FASTAPI]: RESOURCE_ICON_NAMES.FASTAPI,
  [CODEBASE_COMMON_FRAMEWORKS.VUE]: RESOURCE_ICON_NAMES.VUE,
  [CODEBASE_COMMON_FRAMEWORKS.NEXTJS]: RESOURCE_ICON_NAMES.NEXTJS,
  [CODEBASE_COMMON_FRAMEWORKS.EXPRESS]: RESOURCE_ICON_NAMES.EXPRESS,
  [CODEBASE_COMMON_FRAMEWORKS.ANGULAR]: RESOURCE_ICON_NAMES.ANGULAR,
  [CODEBASE_COMMON_FRAMEWORKS.HELM]: RESOURCE_ICON_NAMES.HELM,
  [CODEBASE_COMMON_FRAMEWORKS.CHARTS]: RESOURCE_ICON_NAMES.HELM,
  [CODEBASE_COMMON_FRAMEWORKS.AWS]: RESOURCE_ICON_NAMES.AWS,
  [CODEBASE_COMMON_FRAMEWORKS.GIN]: RESOURCE_ICON_NAMES.GIN,
  [CODEBASE_COMMON_FRAMEWORKS.ANTORA]: RESOURCE_ICON_NAMES.ANTORA,
  [CODEBASE_COMMON_FRAMEWORKS.GIT_OPS]: RESOURCE_ICON_NAMES.GIT_OPS,
} as const;

export const BUILD_TOOL_ICON_MAPPING = {
  [CODEBASE_COMMON_BUILD_TOOLS.GRADLE]: RESOURCE_ICON_NAMES.GRADLE,
  [CODEBASE_COMMON_BUILD_TOOLS.MAVEN]: RESOURCE_ICON_NAMES.MAVEN,
  [CODEBASE_COMMON_BUILD_TOOLS.NPM]: RESOURCE_ICON_NAMES.NPM,
  [CODEBASE_COMMON_BUILD_TOOLS.DOTNET]: RESOURCE_ICON_NAMES.DOTNET,
  [CODEBASE_COMMON_BUILD_TOOLS.GO]: RESOURCE_ICON_NAMES.GO,
  [CODEBASE_COMMON_BUILD_TOOLS.PYTHON]: RESOURCE_ICON_NAMES.PYTHON,
  [CODEBASE_COMMON_BUILD_TOOLS.CODENARC]: RESOURCE_ICON_NAMES.CODENARC,
  [CODEBASE_COMMON_BUILD_TOOLS.TERRAFORM]: RESOURCE_ICON_NAMES.TERRAFORM,
  [CODEBASE_COMMON_BUILD_TOOLS.OPA]: RESOURCE_ICON_NAMES.OPA,
  [CODEBASE_COMMON_BUILD_TOOLS.KANIKO]: RESOURCE_ICON_NAMES.KANIKO,
  [CODEBASE_COMMON_BUILD_TOOLS.HELM]: RESOURCE_ICON_NAMES.HELM,
} as const;

export const CI_TOOL_ICON_MAPPING = {
  [CI_TOOLS.TEKTON]: RESOURCE_ICON_NAMES.TEKTON,
} as const;

export const GIT_PROVIDER_ICON_MAPPING = {
  [GIT_PROVIDERS.GERRIT]: RESOURCE_ICON_NAMES.GERRIT,
  [GIT_PROVIDERS.GITHUB]: RESOURCE_ICON_NAMES.GITHUB,
  [GIT_PROVIDERS.GITLAB]: RESOURCE_ICON_NAMES.GITLAB,
} as const;

export const REGISTRY_TYPE_ICON_MAPPING = {
  [CONTAINER_REGISTRY_TYPE.ECR]: RESOURCE_ICON_NAMES.ECR,
  [CONTAINER_REGISTRY_TYPE.HARBOR]: RESOURCE_ICON_NAMES.HARBOR,
  [CONTAINER_REGISTRY_TYPE.DOCKER_HUB]: RESOURCE_ICON_NAMES.DOCKER,
  [CONTAINER_REGISTRY_TYPE.OPENSHIFT_REGISTRY]: RESOURCE_ICON_NAMES.OPENSHIFT,
} as const;
