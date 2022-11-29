import React from "react";

export interface CountryItem {
  name: {
    common: string;
    official: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  maps: {
    googleMaps: string;
    openStreetmaps: string;
  },

  capital: string,
}

export interface CountryT {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  maps: {
    googleMaps: string;
    openStreetmaps: string;
  };
}

