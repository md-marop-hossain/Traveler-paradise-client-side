import React from 'react';
import Button from "@material-tailwind/react/Button";
const MySingleOrder = (props) => {
    console.log("pro: ", props.filteredOrder);


    const { address, city, email, name } = props.filteredOrder || {};
    return (

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                {name}
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{email}</td>
            <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {props?.filteredOrder?.status} </span>
            </td>
            <td class="px-4 py-3 text-sm border">{address}</td>
            <td class="px-4 py-3 text-sm border">{city}</td>
            <td class="px-4 py-3 text-sm border">{props?.filteredOrder?.phone}</td>
            <td class="px-4 py-3 text-sm border"> <Button
                color="blueGray"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={() => props.handleDeleteUser(props.filteredOrder.order.id)}
            >
                Delete
            </Button></td>
        </tr>
    );
};

export default MySingleOrder;


        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold text-black">Stevens</p>
        //           <p class="text-xs text-gray-600">Programmer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 text-md font-semibold border">27</td>
        //     <td class="px-4 py-3 text-xs border">
        //       <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
        //     </td>
        //     <td class="px-4 py-3 text-sm border">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Nora</p>
        //           <p class="text-xs text-gray-600">Designer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 text-md font-semibold border">17</td>
        //     <td class="px-4 py-3 text-xs border">
        //       <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnacceptable </span>
        //     </td>
        //     <td class="px-4 py-3 text-sm border">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Ali</p>
        //           <p class="text-xs text-gray-600">Programmer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">23</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Khalid</p>
        //           <p class="text-xs text-gray-600">Designer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">20</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Nasser</p>
        //           <p class="text-xs text-gray-600">Pen Tester</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">29</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Mohammed</p>
        //           <p class="text-xs text-gray-600">Web Designer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">38</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Saad</p>
        //           <p class="text-xs text-gray-600">Data</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">19</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>
        //   <tr class="text-gray-700">
        //     <td class="px-4 py-3 border">
        //       <div class="flex items-center text-sm">
        //         <div class="relative w-8 h-8 mr-3 rounded-full">
        //           <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
        //           <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //         </div>
        //         <div>
        //           <p class="font-semibold">Sami</p>
        //           <p class="text-xs text-gray-600">Developer</p>
        //         </div>
        //       </div>
        //     </td>
        //     <td class="px-4 py-3 border text-md font-semibold">21</td>
        //     <td class="px-4 py-3 border text-xs">
        //       <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
        //     </td>
        //     <td class="px-4 py-3 border text-sm">6/10/2020</td>
        //   </tr>