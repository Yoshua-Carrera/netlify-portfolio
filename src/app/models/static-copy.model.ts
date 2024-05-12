export interface ContentCopy {
    header: any;
    cover: any;
    aboutMe: AboutMeCopy;
    projects: any;
    experience: ExperienceCopy;
    contact: any;
}

export interface AboutMeCopy {
    header: string,
    mainBody: string,
    subBody: string
    portrait: string
}

export interface ExperienceCopy {
    header: string,
    mainBody: string,
    subBody: string
    portrait: string
}