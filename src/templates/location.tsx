import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from "@yext/custom-field-debugger";
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
// import Logo from "../images/logo-header.svg"
// import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import Header from "../components/layouts/header";
import SearchBar from "../components/locationDetail/search";
import { Link } from "@yext/pages/components";
import "../index.css";
import Services from "../components/commons/services";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import {
  apikey_for_entity,
  baseuRL,
  stagingBaseurl,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
} from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import Hours from "../components/commons/hours";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "emails",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "c_about",
      "c_banner",
      "c_faq.question",
      "c_faq.answer",
      "c_service",
      "c_readMore",
      "c_readDesc",
      "c_branchDetails",
      "c_branchdetailss",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.dm_directoryChildrenCount",
      //"cityCoordinate"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url = "";
  var name: any = document.name.toLowerCase();
  var string: any = name.toString();
  let result: any = string.replaceAll(" ", "-");
  document.dm_directoryParents?.map((result: any, i: number) => {
    if (i > 0) {
      url += result.slug + "/";
    }
  });
  if (!document.slug) {
    url += `${result}.html`;
  } else {
    url += `${document.slug.toString()}.html`;
  }
  return url;

  // var url: any = ""
  // document.dm_directoryParents?.map((i: any) => {
  //   if (i.meta.entityType.id == 'ce_country') {
  //     url = `${i.slug}`
  //   }
  //   else if (i.meta.entityType.id == 'ce_region') {
  //     url = `${url}/${i.slug}`
  //   }
  //   else if (i.meta.entityType.id == "ce_city"){
  //     url = `${url}/${i.slug}/${document.slug}`
  //   }
  // })
  // return url;
  // return `${document.id}.html`;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title
      ? document.c_meta_title
      : `${document.name} Store of MGM Timber`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            document._site.c_canonical ? document.c_canonical : stagingBaseurl
          }${
            document.slug ? document.slug : `${document.name.toLowerCase()}`
          }.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title
            ? document.c_meta_title
            : `${document.name} Store of MGM Timber`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },
      /// twitter tag
    ],
  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  var location = `${
    data.document.yextDisplayCoordinate
      ? data.document.yextDisplayCoordinate.latitude
      : data.document.displayCoordinate.latitude
  },${
    data.document.yextDisplayCoordinate
      ? data.document.yextDisplayCoordinate.longitude
      : data.document.displayCoordinate.longitude
  }`;

  const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
  // console.log(url);
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};

//   const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&api_key=6956f7fbd94335e6e56d02e4e44f1f9a&v=20181201&resolvePlaceholders=true&entityTypes=location&limit=4`;
//  console.log(url)
//   const externalApiData = (await fetch(url).then((res: any) =>
//     res.json()
//   )) as nearByLocation;
//   return { ...data, externalApiData };
// };

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    id,
    _site,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_banner_image,
    c_readMore,
    c_readDesc,
    c_branchDetails,
    c_branchdetailss,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    c_about,
    c_banner,
    c_faq,
    c_service,
    name,
    emails,
    dm_directoryParents,
  } = document;
  // const services = c_service?.map((link: any) => (
  //   <a className="navbar-item" href={link.link}>
  //     <span>{link.label}</span>
  //   </a>
  // ));
  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
    document.dm_directoryParents.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url +
              "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_city") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + "/" + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url +
              "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": stagingBaseurl + path,
      name: document.name,
    },
  });
  let imageurl = photoGallery
    ? photoGallery.map((element: any) => {
        return element.image.url;
      })
    : null;
  console.log(document);
  let bannerimage = c_banner_image && c_banner_image.image.url;

  const Read = () => {
    // alert("im less function");
    let dots = document.getElementById("dots");
    let moreText = document.getElementByClassName("contentExpand");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };
  const details = "";

  return (
    <>
      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          // url: `${c_canonical?c_canonical:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />

      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <Header _site={_site} />

          <PhotoSlider _site={_site} />
          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            address={address}
          ></BreadCrumbs>

          <div className="container">
            <div className="banner-text banner-dark-bg justify-center ">
              <h1 className="">{name}</h1>
              <div className="openClosestatus detail-page closeing-div">
                {/* <OpenClose timezone={timezone} hours={hours} /> */}
              </div>
            </div>
          </div>
          <div className="location-information">
            <Contact
              address={address}
              phone={mainPhone}
              email={emails}
              hours={hours}
              latitude={
                yextDisplayCoordinate
                  ? yextDisplayCoordinate?.latitude
                  : displayCoordinate?.latitude
              }
              yextDisplayCoordinate={yextDisplayCoordinate}
              longitude={
                yextDisplayCoordinate
                  ? yextDisplayCoordinate?.longitude
                  : displayCoordinate?.longitude
              }
              additionalHoursText={additionalHoursText}
            ></Contact>

            {hours ? (
              <div className="map-sec" id="map_canvas">
                <CustomMap
                  prop={
                    yextDisplayCoordinate
                      ? yextDisplayCoordinate
                      : displayCoordinate
                  }
                />
              </div>
            ) : (
              <div className="map-sec without-hours" id="map_canvas">
                <CustomMap
                  prop={
                    yextDisplayCoordinate
                      ? yextDisplayCoordinate
                      : displayCoordinate
                  }
                />
              </div>
            )}
          </div>
          <div style={{ width: "300px", height: "270px", marginLeft: "100px" }}>
           
          </div>

          <div className="Branchdetails">
            <div className="title">Branch Details</div>
            {document.c_branchDetails}
            <div className="labelDetils">{document.c_readMore}</div>
            <div className="pt-4">{document.c_readDesc}</div>
          </div>


          <div className="py-10">
            <div className="container mx-auto ab-secmain flex flex-wrap items-center">
              <div className="w-full md:w-1/2 px-5">
                <div className="containerr">
                  <img src={c_about?.img?.url} />
                </div>
              </div>
              <div className="w-full md:w-1/2 about-sec px-5">
                <h3 className="font-bold text-2xl ">
                  MGM Timber {c_about?.cTA?.label} About
                </h3>
                <p className="mt-2">{c_about.description}</p>

                <div className="visitButton mt-6">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            {c_faq ? (
              <div className="w-full  pt-4">
                <h4 className="sec_heading  text-[30px] text-center pt-4">
                  How can we help ?
                </h4>
                {<Faq prop={c_faq} c_fAQsCta={document.c_fAQsCta} />}
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="nearby-sec pt-4">
            <div className="container">
              <div className="sec-title">
                <h2 className="">{StaticData.NearStoretext}</h2>
              </div>
              <div className="nearby-sec-inner">
                {yextDisplayCoordinate ||
                cityCoordinate ||
                displayCoordinate ? (
                  <Nearby externalApiData={externalApiData} currentId={id} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* </PageLayout> */}
        </AnalyticsScopeProvider>
      </AnalyticsProvider>

      <Footer _site={_site} />
    </>
  );
};

export default Location;
