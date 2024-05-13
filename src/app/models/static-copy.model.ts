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
    sicobra: ExperienceDetails,
    cuponCity: ExperienceDetails,
    fairfieldUniversity: ExperienceDetails,
    charterCommunications: ExperienceDetails,
}

export interface ExperienceDetails {
    company: string,
    position: string,
    dates: string,
    description: string,
}