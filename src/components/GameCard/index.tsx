import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

interface Data extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Data) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={data.cover}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.name}
                    </Text>

                    <Text style={styles.ads}>
                        {data.ads} anúncio{data.ads == '0' ? '' : 's'}
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}
