import React, { Component } from 'react';
import {
    Animated,
    Easing,
    Dimensions,
    Modal,
    View
} from 'react-native';
import Animation from 'lottie-react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
const lottiefile = require('../../../assets/lottieFiles/animation_loading.json');

export class CustomActivityIndicator extends Component {

    state = {
        // Used by Animation component to run animation
        progress: new Animated.Value(0),
    };

    componentDidMount() {
        // Wait for 1 second before starting animation
        setTimeout(this.animate, 500);
    }

    animate = () => {
        Animated.timing(this.state.progress, {
            // Change from 0 to 1 to run animation
            toValue: 1,
            // Animation duration
            duration: 7000, // higher the value slower the animation and vice versa
            // Linear easings
            easing: Easing.linear,
        }).start(() => {
            // Reset progress to zero after animation is done
            this.state.progress.setValue(0);
            // Animate again
            this.animate();
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4);' }}>
                <View style={{
                    width: width / 3,
                    height: width / 3,
                    alignSelf: 'center',
                    backgroundColor: '#F7F7F7',
                    borderRadius: 5,
                    padding: 10
                }}>
                    <Animation
                        style={{
                            width: (width / 3) - 40,
                            height: (width / 3) - 40
                        }}
                        // Load animation from json file
                        source={lottiefile}
                        // Animate json file
                        progress={this.state.progress}
                    />
                </View>
            </View>
        );
    }
}
