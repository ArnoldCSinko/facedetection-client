import particleOptions from "./particlesConfig";
import React, { Fragment } from "react";
import Particles from "react-particles-js";

const ParticleBackground = () => (
  <Fragment>
    <Particles className="particles" params={particleOptions} />
  </Fragment>
);

export default ParticleBackground;
