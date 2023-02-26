import { projects } from "@/Helpers/Constants/productlist";
import { classNames } from "@/Helpers/Functions/functions";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ProductList = () => {
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Իմ ապրանքները
          </h2>
        </div>
        <ul
          role="list"
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href="#"
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center truncate space-x-3">
                  {/* <span
                    className={classNames(
                      project.bgColorClass,
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  /> */}
                  <img
                    className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                    alt="sorry"
                    src={project.img}
                  />
                  <span className="font-medium truncate text-sm leading-6">
                    {project.title}{" "}
                    <span className="truncate font-normal text-gray-500">
                      {project.model}
                    </span>
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2 text-violet-900">Ապրանք</span>
                </th>

                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">
                  Մոդել
                </th>

                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-violet-900 uppercase tracking-wider">
                  Ավելացվել է
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-violet-900uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <img
                        className="max-w-none h-20 w-20 rounded-full object-cover ring-2 ring-white"
                        alt="sorry"
                        src={project.img}
                      />
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>{project.title} </span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        <span className="text-gray-500 font-normal">
                          {project.model}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {project.lastUpdated}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductList;
