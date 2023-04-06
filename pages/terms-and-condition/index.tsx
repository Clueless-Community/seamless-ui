import React from "react";
import Navbar from "components/Navbar";

const Home = () => (
    <div className="index-bg ">
        <Navbar />
        <div className="relative flex flex-col justify-center items-center ">
            <div className="md:px-52  py-24  text-justify">
                <div className="green-gradient  absolute md:left-84 left-0 "></div>
                <div className="green-gradient  absolute md:right-84 md:top-72 right-0"></div>
                <h1 className="text-[#7EE787] font-bold md:text-4xl text-2xl    pb-8 underline">
                    About terms and Conditions:
                </h1>
                <div className="green-gradient  absolute md:left-80 left-0 "></div>
                <div className="green-gradient  absolute md:right-80 md:top-72 right-0"></div>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    1. Terms
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    By accessing this Website, accessible from clueless.tech, you are
                    agreeing to be bound by these Website Terms and Conditions of Use and
                    agree that you are responsible for the agreement with any applicable
                    local laws. If you disagree with any of these terms, you are
                    prohibited from accessing this site. The materials contained in this
                    Website are protected by copyright and trade mark law.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    2. User License
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    Permission is granted to temporarily download one copy of the
                    materials on ClueLess's Website for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not a
                    transfer of title, and under this license you may not: modify or copy
                    the materials; use the materials for any commercial purpose or for any
                    public display; attempt to reverse engineer any software contained on
                    ClueLess's Website; remove any copyright or other proprietary
                    notations from the materials; or transferring the materials to another
                    person or "mirror" the materials on any other server. This will let
                    ClueLess to terminate upon violations of any of these restrictions.
                    Upon termination, your viewing right will also be terminated and you
                    should destroy any downloaded materials in your possession whether it
                    is printed or electronic format. These Terms of Service has been
                    created with the help of the Terms Of Service Generator.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    3. Disclaimer
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    All the materials on ClueLess’s Website are provided "as is". ClueLess
                    makes no warranties, may it be expressed or implied, therefore negates
                    all other warranties. Furthermore, ClueLess does not make any
                    representations concerning the accuracy or reliability of the use of
                    the materials on its Website or otherwise relating to such materials
                    or any sites linked to this Website.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    4. Limitations
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    ClueLess or its suppliers will not be hold accountable for any damages
                    that will arise with the use or inability to use the materials on
                    ClueLess’s Website, even if ClueLess or an authorize representative of
                    this Website has been notified, orally or written, of the possibility
                    of such damage. Some jurisdiction does not allow limitations on
                    implied warranties or limitations of liability for incidental damages,
                    these limitations may not apply to you.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    5. Revisions and Errata
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    The materials appearing on ClueLess’s Website may include technical,
                    typographical, or photographic errors. ClueLess will not promise that
                    any of the materials in this Website are accurate, complete, or
                    current. ClueLess may change the materials contained on its Website at
                    any time without notice. ClueLess does not make any commitment to
                    update the materials.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    6. Links
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    ClueLess has not reviewed all of the sites linked to its Website and
                    is not responsible for the contents of any such linked site. The
                    presence of any link does not imply endorsement by ClueLess of the
                    site. The use of any linked website is at the user’s own risk.
                </p>
                <h1 className="text-white font-semibold text-2xl underline pb-5">
                    7. Site Terms of Use Modifications
                </h1>
                <p className="text-white pb-10 md:w-[1300px] w-80 text-lg">
                    ClueLess may revise these Terms of Use for its Website at any time
                    without prior notice. By using this Website, you are agreeing to be
                    bound by the current version of these Terms and Conditions of Use.
                </p>
            </div>
        </div>
    </div>
);

export default Home;
