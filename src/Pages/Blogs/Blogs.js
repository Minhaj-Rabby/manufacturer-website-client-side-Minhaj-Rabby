import React from "react";
import Footer from "../Common/Footer/Footer";

const Blogs = () => {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-12">
				<h2 className="text-center text-purple-500 my-4 text-2xl">
					Question answer
				</h2>
				<div className="accordion" id="accordionExample">
					<div className="accordion-item bg-white border border-gray-200">
						<h2 className="accordion-header mb-0" id="headingOne">
							<button
								className="
								font-bold
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								How will you improve the performance of a React
								Application?
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body py-4 px-5">
								<p>
									To successfully optimize our React
									application, we must first find a
									performance problem in our application to
									rectify. There are some pre-optimization
									techniques that can be used to improve the
									performance of a React Application.
									1).Keeping component state local where
									necessary. 2).Memoizing React components to
									prevent unnecessary re-renders likes Using
									React.memo(),Using the useCallback
									Hook,Using the useMemo Hook.
									3).Code-splitting in React using dynamic
									import(). 4).Windowing or list
									virtualization in React application.
								</p>
							</div>
						</div>
					</div>
					<div className="accordion-item bg-white border border-gray-200">
						<h2 className="accordion-header mb-0" id="headingTwo">
							<button
								className="
								font-bold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								What are the different ways to manage a state in
								a React application?
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body py-4 px-5">
								There are four main types of state you need to
								properly manage in your React apps: Local
								state,Global state,Server state,URL state.
								Manage Local State: By using the useState hook
								in React We can Manage Local State. Manage
								Global State:By using the library like Zustand,
								makes your entire global state a custom hook,
								and to read or update state, you just call this
								hook in your components.Also you can use Redux
								Toolkit to Manage Global State. Manage Server
								State:there are a couple of great libraries that
								make data fetching in React a breeze: SWR and
								React Query.Bu using them we can Manage Server
								State. Manage URL State:If we are using React
								Router, we can get all the information we need
								using useHistory or useLocation, If we are using
								Next.js, almost everything can access directly
								from calling useRouter.
							</div>
						</div>
					</div>
					<div className="accordion-item bg-white border border-gray-200">
						<h2 className="accordion-header mb-0" id="headingThree">
							<button
								className="
								font-bold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								What is a unit test? Why should write unit
								tests?
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body py-4 px-5">
								<p>
									Unit testing is a software development
									process in which the smallest testable parts
									of an application, called units, are
									individually and independently scrutinized
									for proper operation. One of the benefits of
									unit tests is that they isolate a function,
									class or method and only test that piece of
									code. Higher quality individual components
									create overall system resiliency. Thus, the
									result is reliable code. Unit tests also
									change the nature of the debugging process.
								</p>
							</div>
						</div>
					</div>
					<div className="accordion-item bg-white border border-gray-200">
						<h2 className="accordion-header mb-0" id="headingThree">
							<button
								className="
								font-bold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								You have an array of products. Each product has
								a name, price, description, etc. How will you
								implement a search to find products by name?
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body py-4 px-5">
								<p>
									I will use filter method over products and
									in condition check i will use include
									method.
								</p>
							</div>
						</div>
					</div>
					<div className="accordion-item bg-white border border-gray-200">
						<h2 className="accordion-header mb-0" id="headingThree">
							<button
								className="
								font-bold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								How does prototypical inheritance work?
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body py-4 px-5">
								<p>
									The Prototypal Inheritance is a feature in
									javascript used to add methods and
									properties in objects. It is a method by
									which an object can inherit the properties
									and methods of another object.
									Traditionally, in order to get and set the
									[[Prototype]] of an object, we use
									Object.getPrototypeOf and
									Object.setPrototypeOf. Nowadays, in modern
									language, it is being set using __proto__.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Blogs;
