import React, { Component } from 'react';
import {
    Animated,
    Easing,
    Dimensions
} from 'react-native';
import Animation from 'lottie-react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

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
            duration: 2000, // higher the value slower the animation and vice versa
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
            <Animation
                style={{
                    // Black background
                    backgroundColor: '#000',
                    // Screen width
                    width: width,
                    // Screen height
                    height: height,
                }}
                // Load animation from json file
                source={require('/Users/deepakkatuwal/Documents/MyProjects/InnerNepal/ecommerce/assets/lottieFiles/animation_loading.json')}
                // Animate json file
                progress={this.state.progress}
            />
        );
    }
}
