export const title1 = "Using Intrinsic Motivation to Solve Robotic Tasks with Sparse Rewards"
export const time1 = "May 05, 2019"
export const body1 = `        
<h1 id="abstract">Abstract</h1>
<p>Many robotics problems are naturally formulated such that the extrinsic rewards to the agent are either sparse or missing altogether.  These problems can be extremely difficult to solve as the environment provides little to no feedback to guide the agent toward accomplishing its goal.  Previous works have shown that agents that train using prediction error as an intrinsic reward are able to learn across a wide range of domains, including Atari games and continuous control tasks [<a href="https://arxiv.org/abs/1705.05363">1</a>, <a href="https://arxiv.org/abs/1808.04355">2</a>, <a href="https://arxiv.org/abs/1810.12894">3</a>].  In this project, I use curiosity-driven exploration to solve challenging robotics tasks with sparse rewards.  Following these previous works, I formulate the intrinsic reward as the error in the agent’s ability to predict its next state, given its current state and executed action. My results demonstrate that this approach is capable of solving several difficult robotic manipulation tasks in simulation.</p>

<h1 id="introduction">Introduction</h1>
<p>The goal of reinforcement learning is for an agent to learn to solve a given task by maximizing its total expected reward.  Instead of relying on external instructions, the agent learns how to choose actions by exploring and interacting directly with the environment.  Reinforcement learning problems can roughly be sorted into two categories: 1) where the agent receives dense rewards and 2) where the agent receives sparse (or no) rewards.</p>

<p>In the first case, the environment provides a continuous source of feedback to the agent in the form of dense scalar rewards.  These rewards, which are received at every time step, guide the agent toward choosing the best actions to solve the task.  This approach has seen many successes, including solving challenging Atari games [<a href="https://arxiv.org/abs/1312.5602">4</a>] and physical control problems with continuous state and action spaces [<a href="https://arxiv.org/abs/1509.02971">5</a>].</p>

<p>In the second case, which is the focus of this project, the environment provides little-to-no feedback to the agent.  Robotics problems are great examples of the sparse-reward settings that are so common to the real-world.  Consider, for example, a robotic agent tasked with clearing a table.  Rather than designing a complicated reward function that considers the myriad of subtasks, a more natural approach is to supply a reward only once every item has been removed and the goal is finally met.</p>

<p>Therefore, the agent must learn the requisite skills in the absence of any feedback from the environment, but is unlikely to randomly stumble upon a good policy by chance.  One way to overcome this challenge is by carefully engineering a reward function that generates extrinsic rewards to guide the agent’s progress.  This approach, however, is saddled with the difficult chore of designing a custom reward functions for every environment; and a design that is hand-crafted may inadvertently fail to specify the task well enough to deter undesirable behaviors from the agent.  Alternatively, we may opt for methods that will encourage the agent to explore and learn new skills in the absence of any external rewards from the environment.  In this project, I explore learning a reward function that is intrinsic to the agent in order to solve sparse reward problems.</p>

<h1 id="intrinsic-motivation-in-reinforcement-learning">Intrinsic Motivation in Reinforcement Learning</h1>
<p>One source of inspiration for solving sparse reward problems has come from the field of developmental psychology, namely <strong><em>motivation</em></strong>.  There are two types of motivation: <em>extrinsic motivation</em> and <em>intrinsic motivation</em>.</p>


<p>Another formulation for an intrinsic reward encourages the agent to perform actions that reduce the error in its ability to predict the outcome of its actions [<a href="https://arxiv.org/abs/1705.05363">1</a>, <a href="https://arxiv.org/abs/1808.04355">2</a>, <a href="https://arxiv.org/abs/1810.12894">3</a>, <a href="https://pdfs.semanticscholar.org/fb3c/6456708b0e143f545d77dc8ec804eb947395.pdf">13</a>, <a href="https://arxiv.org/abs/1810.01176">14</a>].  Using deep neural networks to predict the agent’s next state given its current state and action, [<a href="https://arxiv.org/abs/1705.05363">1</a>] showed that intrinsic reward (<em>i.e.</em> prediction error) can be used to learn good exploration policies, even in the absence of extrinsic rewards.  Burda <em>et al</em> systematically investigated how the choice of feature representation affects curiosity-driven learning across a diverse range of environments [<a href="https://arxiv.org/abs/1808.04355">2</a>].  They showed that random features work well for evaluating trained tasks, but learned features tend generalize better to unseen scenarios.  Follow-up work by Burda <em>et al</em> showed that distilling features from a randomly initialized network and combining non-episodic extrinsic rewards and intrinsic rewards with different discount factors was able to solve the challenging Atari game <em>Montezuma’s Revenge</em> [<a href="https://arxiv.org/abs/1810.12894">3</a>].</p>

<h1 id="experimental-setup">Experimental Setup</h1>
<p>This section describes the experimental design and environments that I used to evaluate whether adding intrinsic rewards as an exploration bonus aids in solving sparse robotics tasks.</p>

<h3 id="pick-and-place">Pick and Place</h3>
<p>The Pick and Place task requires the agent grab a block in its workspace and lift it to a specified location. This environment is 28 dimensions.</p>

<h3 id="sliding">Sliding</h3>
<p>Similar to the Pushing task, the Sliding task is solved once the robot slides a puck to a given target location.  Unlike the Pushing task, the target location is not within the workspace of the robot. This environment is 28 dimensions.</p>

<h2 id="environment-modifications">Environment Modifications</h2>
<p>I made a number modifications to the environments that allow more control over setting the extrinsic reward, observation type, and termination of an episode.</p>

<h3 id="rewards">Rewards</h3>
<p>The environments are classified based on the types of extrinsic rewards provided by the environment:</p>
<ul>
  <li><strong>Dense</strong> - at every time step the agent receives a reward that is proportional to the distance from a desired goal</li>
  <li><strong>Sparse</strong> -  the agent receives a reward of -1 at every time step and a reward of 0 if it solves the task</li>
  <li><strong>Very Sparse</strong> -  the agent receives a reward of 0 at every time step and a reward of 1 if it solves the task</li>
</ul>

<h3 id="resets">Resets</h3>
<p>I made versions of each task that:</p>
<ul>
  <li><strong>Never resets</strong> the environment before the max number of time steps</li>
  <li><strong>Only resets</strong> the environment early <strong>after successful attempts</strong></li>
  <li><strong>Only resets</strong> the environment early <strong>when the task becomes impossible</strong></li>
  <li><strong>Resets</strong> the environment early <strong>after successes and failures</strong></li>
</ul>

<h3 id="observation-types">Observation types</h3>
<p>The following observations can be used:</p>
<ul>
  <li><strong>State space</strong> (<em>i.e.</em> kinematics) of the robot (default)</li>
  <li><strong>RGB images</strong> from three different views</li>
  <li><strong>Depth maps</strong> corresponding the RGB images above</li>
  <li><strong>Touch sensor data</strong> to measure contacts between the gripper and the environment</li>
</ul>

<h2 id="network-architecture-and-training-details">Network Architecture and Training Details</h2>
<p>All agents in this project are trained using kinematic inputs, <em>i.e.</em> the positions and velocities of the robot’s end effector as well as any objects in the scene.  The agent’s policy and value function networks are both parameterized as Feedforward Neural Networks.  The policy network consists of two hidden layers: the first layer has a ReLU activation, while the second layer has a Tanh activation.  The output of the second layers is fed to another module that models the robot’s actions as a Gaussian distribution (<em>i.e.</em> predicts the mean and standard deviation).  The value function network also contains two hidden layers, both of which have ReLU activations.  Both the policy and value networks take the robot’s state as input.</p>

<p>All networks are trained separately using the Adam optimizer with different learning rates.</p>

<h1 id="results">Results</h1>

<h2 id="solving-the-reaching-task">Solving the Reaching Task</h2>
<p>As mentioned above, the reaching task is the simplest task in the Fetch robotics suite.  It is therefore a great environment to verify the baseline PPO implementation, as well as investigate whether adding dense intrinsic rewards will improve exploration and learning of sparse tasks.   As shown in the plots below, all agents readily solve the Reaching task, converging to 100% accuracy by the end of training.</p>


<h2 id="analysis-of-hyperparameters-for-the-pushing-task">Analysis of Hyperparameters for the Pushing Task</h2>
<p>The Pushing Task is the simplest non-trivial task in the OpenAI Robotics Suite.  It therefore provided a good environment to investigate how tuning the various hyperparameters affects overall performance.  This section details the analyses used to select the hyperparameters used in most of the experiments.</p>

<h3 id="number-of-hidden-units">Number of Hidden Units</h3>
<p>Tuning the number of neurons in the hidden layers is an extremely important aspect of training neural networks.  If the network is too large, you risk over-fitting the data.  Likewise, if the network is too small, it can be difficult to learn anything at all.  In this experiment, I varied the size of the hidden layers from 16 to 1024 neurons.  In general, bigger networks were observed to be more performant than smaller networks.  For most of the experiments shown, I settled on training networks with 64 neurons.  This is because 64-unit networks have similar performance to the larger networks, but they have fewer parameters and require less wall time to train.</p>

<h3 id="number-of-parallel-workers">Number of Parallel Workers</h3>
<p>Since PPO is <em>on-policy</em>, training requires data collected with the current policy.  This is difficult to do because the distributions of states, rewards, and actions change every time the model is updated.  One way to get around this issue is to parallelize the environment and use multiple workers to collect a large and varied amount of training data.  The number of workers required to solve a given task is likely proportional to the complexity of the task.  For example, solving the reaching task with four or fewer workers is relatively easy, while solving the pushing task with so few workers is vastly more difficult (data not shown).  In this experiment, I tuned the number of parallel workers collecting rollout data using the current policy.  With only 8 workers, the model is only able to learn up to a certain point until performance begins to decrease.  In contrast, increasing the number of works to 16 and beyond greatly improved algorithm convergence.  Based on these results and the number of cores available on my CPU, I chose to use 32 parallel workers in all of the experiments.</p>



<h3 id="dynamics-model-learning-rate">Dynamics Model Learning Rate</h3>
<p>The prediction error of the dynamics model is used to generate the intrinsic reward that encourages the agent to explore.  As such, the intrinsic rewards should be relatively large at the beginning of training when agent lacks understanding of the environment, and smaller once the agent is able to predict the consequences of its actions.  If the dynamics model learns too quickly, the intrinsic rewards will prematurely decrease in size and the agent won’t explore efficiently.  If, on the other hand, the dynamics model learns too slowly, large intrinsic rewards will result in excessive exploration by the agent.  To determine which learning would be best for Fetch Robotics tasks, I varied the dynamics model learning rate over three orders of magnitude.  I observed that, while the agent was able to learn for every tuning of the learning rate, smaller learning rates caused the agent to learn fastest.</p>


<h1 id="summary">Summary</h1>
<p>Consistent with previous works, my results demonstrate that curiosity-driven exploration can be used to solve challenging tasks with sparse rewards.  In particular, I have shown that using the prediction error as the intrinsic reward can encourage an agent to solve a diverse set of robotics tasks.  In addition to the intrinsic reward signal, properly tuning various hyperparameters plays a significant role in ensuring that the agent can learn in the presence of sparse rewards.  This was especially true for the Sliding task, as it seemed the most sensitive to the selection of hyperparameters.  Surprisingly, while one set of hyperparameters was sufficient for solving Reaching, Pushing, and Pick and Place, Sliding required significant tuning and many more environment interactions.</p>

<h1 id="future-directions">Future Directions</h1>
<p>The work presented here provides an excellent starting point for future research. In this section, I will briefly discuss a few ideas that are motivating my next set of experiments.</p>

<h2 id="new-tasks">New Tasks</h2>


<h2 id="learning-from-pixels">Learning from Pixels</h2>
<p>Learning control policies from pixels is currently an active area of research.  Building off of my current results, I will perform experiments in which I compare how learning different feature representations for images my affect intrinsic motivation and exploration.  In particular, I will investigate using feature representations such as random convolutional neural network features (RF), variational autoencoder (VAE) features, and inverse dynamics features (IDF) [<a href="https://arxiv.org/abs/1808.04355">2</a>].</p>

<h2 id="combining-multiple-modalities">Combining Multiple Modalities</h2>
<p>While previous papers have largely focused on learning a feature space for a single modality such as images for Atari games or joint kinematics for continuous control, it is not clear which modalities are most important for solving robotic manipulation tasks.  Robots are often equipped with one or more sensors that measure various aspects of their state and environment: (1) encoders that measure positions and velocities of its joints; (2) cameras that provide visual perception; and (3) tactile sensors that measure contacts with the environment.  I therefore intend to address the following question:</p>

<ul>
  <li>Does including additional sensor modalities in the feature space result in better exploration policies?</li>
</ul>

<p>Although there are numerous ways to combine the feature representations for the different modalities,  I will initially focus on learning vector representations, and concatenating those features as input to the dynamics model to generate intrinsic rewards.  In a separate set of experiments I will also investigate whether the learned multimodal features are able to improve policy learning.</p>

<h1 id="references">References</h1>
<ol>
  <li><a href="https://arxiv.org/abs/1705.05363">Curiosity-driven Exploration by Self-supervised Prediction</a></li>
  <li><a href="https://arxiv.org/abs/1808.04355">Large-Scale Study of Curiosity-Driven Learning</a></li>
  <li><a href="https://arxiv.org/abs/1810.12894">Exploration by Random Network Distillation</a></li>
  <li><a href="https://arxiv.org/abs/1312.5602">Playing Atari with Deep Reinforcement Learning</a></li>
  <li><a href="https://arxiv.org/abs/1509.02971">Continuous control with deep reinforcement learning</a></li>
  <li><a href="https://ieeexplore.ieee.org/abstract/document/170605">Curious model-building control systems</a></li>
  <li><a href="https://arxiv.org/abs/1103.5708">Planning to Be Surprised: Optimal Bayesian Exploration in Dynamic Environments</a></li>
  <li><a href="http://people.idsia.ch/~juergen/ieeecreative.pdf">Formal Theory of Creativity, Fun, and Intrinsic Motivation</a></li>
  <li><a href="https://pdfs.semanticscholar.org/2547/be25e1e07728aa0966a0354e90664816d15e.pdf">Reinforcement Driven Information Acquisition In Non-Deterministic Environments</a></li>
  <li><a href="https://arxiv.org/abs/1611.07507">Variational Intrinsic Control</a></li>
  <li><a href="https://arxiv.org/abs/1606.01868">Unifying Count-Based Exploration and Intrinsic Motivation</a></li>
  <li><a href="https://papers.nips.cc/paper/4642-exploration-in-model-based-reinforcement-learning-by-empirically-estimating-learning-progress">Exploration in Model-based Reinforcement Learning by Empirically Estimating Learning Progress</a></li>
  <li><a href="https://pdfs.semanticscholar.org/fb3c/6456708b0e143f545d77dc8ec804eb947395.pdf">Curiosity-driven exploration in deep reinforcement learning via bayesian neural networks</a></li>
  <li><a href="https://arxiv.org/abs/1810.01176">EMI: Exploration with Mutual Information</a></li>
  <li><a href="https://arxiv.org/abs/1707.06347">Proximal Policy Optimization Algorithms</a></li>
  <li><a href="https://arxiv.org/abs/1802.09464">Multi-Goal Reinforcement Learning: Challenging Robotics Environments and Request for Research</a></li>
  <li><a href="https://arxiv.org/abs/1606.01540">OpenAI Gym</a></li>
</ol>
`

