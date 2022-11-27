import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Language from '../screens/Language';
import Firstpage from '../screens/Firstpage';
import Home from '../screens/Home';
import Mother from '../screens/Mother';
import Baby from '../screens/Baby';
import Vaccine from '../screens/Vaccine';
import EPI from '../screens/EPI';
import OneToEleven from '../screens/OneToEleven';
import FAQBaby from '../screens/FAQBaby';
import Quiz from '../screens/Quiz';
import Awareness from '../screens/Awareness';
import QuizPageNew from '../screens/QuizPageNew';
import Maternity from '../screens/Maternity';






const screens = {
    Language: {
        screen: Language
    },
    Firstpage: {
        screen: Firstpage
    },
    Home: {
        screen: Home
    },
    Mother: {
        screen: Mother
    },
    Baby: {
        screen: Baby
    },
    Vaccine: {
        screen: Vaccine
    },
    EPI: {
        screen: EPI
    },
    OneToEleven: {
        screen: OneToEleven
    },

    FAQBaby: {
        screen: FAQBaby
    },

    Quiz: {
        screen: Quiz
    },
    Awareness: {
        screen: Awareness
    },
    QuizPageNew: {
        screen: QuizPageNew
    },
    Maternity: {
        screen: Maternity
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);