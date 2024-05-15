export interface ContentCopy {
    header: headerCopy;
    cover: CoverCopy;
    aboutMe: AboutMeCopy;
    projects: ProjectsCopy;
    experience: ExperienceCopy;
    contact: any;
}

export interface ProjectsCopy {
    header: string;
    seeMore: string;
    catManga: ProjectDetails;
    cuponcity: ProjectDetails;
    chemquestApp: ProjectDetails;
    spectrumWeb: ProjectDetails;
}

export interface ProjectDetails {
    name: string;
    hoverTextColor: string;
    clientName: string;
    timeFrame: string;
    screenshot: string;
    location: string;
}

export interface headerCopy {
    about: string;
    projects: string;
    experience: string;
    contact: string;
}

export interface CoverCopy {
    myNameIs: string;
    name: string;
    hereIsMyWork: string;
    buttonText: string;
}

export interface CoverbuttonsCopy {
    ARROW_DOWNWARD: string
    ARROW_RIGHT_ALT: string
}

export interface AboutMeCopy {
    header: string,
    mainBody: string,
    subBody: string,
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