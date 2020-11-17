export default function HomePage() {
  return (
    <>
      <section className="header bg-green-700 relative items-center flex pt-24 pb-8">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="text-white pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl">
                TP NextJS - Tailwind CSS
              </h2>
              <h4 className="mt-2 text-2xl leading-relaxed text-gray-300 font-bold">
                Create a Next.js app
              </h4>
              <pre>{`
npx create-next-app
# or
yarn create next-app
              `}</pre>

              <h4 className="mt-2 text-2xl leading-relaxed text-gray-300 font-bold">
                Install libs
              </h4>
              <pre>{`
yarn add -D scss tailwindcss postcss-preset-env postcss-flexbugs-fixes
              `}</pre>

            </div>
          </div>
        </div>
      </section>

      <section className="relative items-center flex pt-6 pb-16">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h4 className="mt-4 text-2xl leading-relaxed text-gray-900 font-bold">
                Folder structure
              </h4>

                <ul className="tree">

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 assets</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 styles</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                          <li id="menu14">
                            <a>
                              <label htmlFor="menu14">📝 globals.scss</label>
                              <input defaultChecked id="menu14" value="" type="checkbox" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>images</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 components</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 common</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 partials</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 layouts</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 default.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 error.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 pages</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 _app.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 _error.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 404.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 index.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 public</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env.development</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env.production</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 jsconfig.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 next.config.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 postcss.config.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 tailwind.config.js</a>
                    </label>
                  </li>

                </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
