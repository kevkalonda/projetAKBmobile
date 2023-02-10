import { createDrawerNavigator } from '@react-navigation/drawer';

import AddVehicule from './AddVehicule';
import MesVehicules from './MesVehicules';

const Drawer = createDrawerNavigator();

const Vehicule = (props) => {
  const idUser = props.route.params.id
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mes Vehicule" component={MesVehicules} initialParams={{id:idUser}}/>
      <Drawer.Screen name="Ajouter un Vehicule" component={AddVehicule} initialParams={{id:idUser}} />
    </Drawer.Navigator>
  );
}
export default Vehicule;