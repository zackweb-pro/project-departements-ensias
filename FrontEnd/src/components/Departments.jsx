// at the top of the file
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Listbox } from '@headlessui/react';

const departments = [
  {
    id: 1,
    name: 'Génie Logiciel',
    description: 'Formation approfondie en développement logiciel, méthodologies agiles, et architecture des systèmes.',
    chef: 'Prof. Bouchaib BOUNABAT',
    chefImage: 'https://via.placeholder.com/100x100.png?text=GL+Chef',
    modules: [
      { name: 'Architecture des Systèmes', professor: 'Prof. Ahmed EL MOUTAOUAKIL' },
      { name: 'Méthodes Agiles', professor: 'Dr. Nadia LAGHZAOUI' },
      { name: 'Qualité Logicielle', professor: 'Dr. Youssef EL KAF' },
    ],
  },
  {
    id: 2,
    name: 'Ingénierie Intelligence Artificielle',
    description: 'Spécialisation en machine learning, deep learning, et traitement du langage naturel.',
    chef: 'Prof. Nassar EL HASSANI',
    chefImage: 'https://via.placeholder.com/100x100.png?text=AI+Chef',
    modules: [
      { name: 'Deep Learning', professor: 'Prof. Imad BADI' },
      { name: 'Traitement du Langage Naturel', professor: 'Dr. Sara DARBARE' },
      { name: 'Vision par Ordinateur', professor: 'Dr. Hicham EL KAF' },
    ],
  },
];

export default function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  return (
    <section id="departments" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-gray-900 mb-4 text-[#ee3638]">Nos Départements</h2>
        <p className="text-gray-600">Découvrez nos différentes filières d'excellence</p>
      </motion.div>

      <div className="max-w-xl mx-auto">
        <Listbox value={selectedDepartment} onChange={setSelectedDepartment}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ensias-red">
              <span className="block truncate">{selectedDepartment.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {departments.map((department) => (
                <Listbox.Option
                  key={department.id}
                  value={department}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-4 ${
                      active ? 'bg-ensias-red text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {department.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <motion.div
          key={selectedDepartment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <img
              src={selectedDepartment.chefImage}
              alt={selectedDepartment.chef}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold text-[#ee3638]">{selectedDepartment.name}</h3>
              <p className="text-gray-600">{selectedDepartment.description}</p>
              <div className="flex items-center text-gray-700 mt-2">
                <span className="font-semibold">Chef de département:</span>
                <span className="ml-2">{selectedDepartment.chef}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {selectedDepartment.modules.map((mod, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group relative bg-white border border-gray-200 rounded-lg shadow-md p-4 overflow-hidden transition-all duration-300"
                >
                  <div className="text-gray-900 text-lg font-semibold group-hover:text-[#ee3638] transition duration-300">
                    {mod.name}
                  </div>
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-[#ee3638]">Professeur :</span> {mod.professor}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
