import 'package:flutter/material.dart';
import 'package:project/components/task.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({Key? key}) : super(key: key);

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {
  bool opacity = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Task Levels',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.blue,
      ),
      body: AnimatedOpacity(
        opacity: opacity ? 1 : 0,
        duration: const Duration(milliseconds: 800),
        child: ListView(
          children: const [
            Task('Learn Flutter', 'assets/images/flutter.png', 3),
            Task('Learn React Native', 'assets/images/react_native.png', 4),
            Task('Learn Node', 'assets/images/node.png', 3),
            Task('Learn HTML', 'assets/images/html.png', 1),
            Task('Learn Tailwind', 'assets/images/tailwind.png', 2),
            SizedBox(
              height: 80,
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            opacity = !opacity;
          });
        },
        backgroundColor: Colors.blue,
        child: const Icon(
          Icons.remove_red_eye,
          color: Colors.white,
        ),
      ),
    );
  }
}
