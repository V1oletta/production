export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    build: string,
    html: string
    entry: string,
    src: string
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}