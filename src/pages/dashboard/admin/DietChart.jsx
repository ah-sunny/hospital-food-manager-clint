import EveningFood from './DietFoodlist/EveningFood';
import MornigFood from './DietFoodlist/MornigFood';
import NightFood from './DietFoodlist/NightFood';

export default function DietChart() {
  

  return (
    <div>
      <h1 className="text-5xl font-bold mx-auto text-center uppercase mt-12 border-b-2 pb-4 border-gray-500">Diet Chart </h1>


      {/* chart table  */}
      <div className="flex gap-2 mt-10">



        {/* morning colounm */}
        <div className="min-h-screen w-1/3">
          <MornigFood></MornigFood>
         
          
        </div>
        {/* evening colounm */}
        <div className="min-h-screen w-1/3">
        <EveningFood></EveningFood>
        </div>
        {/* night coloum */}
        <div className="min-h-screen w-1/3">
<NightFood></NightFood>
        </div>



      </div>


    </div>
  )
}
