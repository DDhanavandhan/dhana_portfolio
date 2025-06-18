import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('team.devxora@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m dhanavandhan</p>
              <p className="grid-subtext">
              I am a recent graduate with a degree in BCA, and I am passionate about devops concept and my skills in automating
                processes, managing infrastructure, and ensuring the reliability of systems. I am eager to contribute my knowledge
                and enthusiasm to a dynamic team where I can continue to learn and grow in the field of devops.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/hero-bg.svg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              <img width="3000" src="https://skillicons.dev/icons?i=aws,linux,ubuntu,redhat,terraform" />
              <br />
              <img width="3000" src="https://skillicons.dev/icons?i=docker,bash,jenkins,vscode,github,git" />
              <br />
              <img width="3000" src="https://skillicons.dev/icons?i=,nodejs,githubactions,grafana,kubernetes" />
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in chennai and available for remote work and relocate across the india.</p>
              <br />
              <p className="grid-subtext">Feel free to reach out to me via email or connect with me on LinkedIn.</p>
              <br />
              <a href="mailto:dhanavandhan96@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
  </a>
  <br />
  <a href="https://www.linkedin.com/in/dhanavandhan-d-9385a9246" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <br />
  <a href="https://drive.google.com/drive/folders/1--mUeoGovE0-3G-dOsqkN3THCYRoh7jb" target="_blank">
    <img src="https://img.shields.io/badge/resume-FF5722?style=for-the-badge&logo=todoist&logoColor=white" target="_blank" />
  </a>
  <br />
  <div align="left" >
  <a href="https://github.com/DDhanavandhan">
  <img src="https://img.shields.io/badge/GITHUB-333333?style=for-the-badge&logo=Github&logoColor=red" />
  </a>
  </div>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for DevOps</p>
              <p className="grid-subtext">
              I have a strong foundation in DevOps practices and tools, including Docker, Kubernetes, Jenkins, and AWS. I am at
                a intermidiate-level in scripting languages such as yamal and Bash, and I have experience with configuration management tools
                like Terraform. My goal is to leverage these skills to streamline development processes and enhance system
                reliability.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center ">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">dhanavandhan96@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
